import express from "express";
import multer from 'multer';
import path from 'path';
import fs from 'fs'
import * as dotenv from 'dotenv'
import { ethers } from 'ethers'
import { connect, resultsToObjects, SUPPORTED_CHAINS } from '@tableland/sdk'
import { Web3Storage, getFilesFromPath } from 'web3.storage'
const router = express.Router()
dotenv.config();

const polygonTestnet = SUPPORTED_CHAINS['polygon-mumbai']

router.post('/', async(req,res,next) => {
    try{
        const {id, name} = req.body
        const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
        const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)
        const signer = wallet.connect(provider)
        const tableLand = await await connect({ signer, network: "testnet", host: polygonTestnet.host, contract: polygonTestnet.contract, chainId: polygonTestnet.chainId })
        const insertDocument = await tableLand.write(`INSERT INTO categories_80001_682  (id, name) VALUES ( ${Number(id)}, '${name}')`);
        
        return res.status(200).json({ 
            statusode: 200, 
            data: insertDocument 
        })
        
    }
    catch (e) {
        res.status(500).json({
            statusCode: 500,
            error: e.message
        })
    }
})

router.post('/table', async(req,res,next) => {
    try{
        const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
        const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)
        const signer = wallet.connect(provider)
        const tableLand = await await connect({ signer, network: "testnet", host: polygonTestnet.host, contract: polygonTestnet.contract, chainId: polygonTestnet.chainId })

        const { name } = await tableLand.create(
            `name text, id int, primary key(id)`,
            `categories`
        )
        return res.status(200).json({ statusode: 200, data: name })
    }
    catch (e) {
        res.status(500).json({
            statusCode: 500,
            error: e.message
        })
    }
})


router.get('/', async(req,res,next) => {
    try{
        let categories = []
        const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
        const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)
        const signer = wallet.connect(provider)
        const tableLand = await await connect({ signer, network: "testnet", host: polygonTestnet.host, contract: polygonTestnet.contract, chainId: polygonTestnet.chainId })

        const events = await tableLand.read(`SELECT * FROM categories_80001_682`)
        const entries = resultsToObjects(events)

        for (const {name, id } of entries) {
            let data  = {
                'id': id,
                'name': name
            }
            categories.push(data)
        }
        res.status(200).json({
            statusCode: 200,
            message: "Categories fetched",
            data: categories
        })
    }
    catch (e) {
        res.status(500).json({
            statusCode: 500,
            error: e.message
        })
    }
})


export default router