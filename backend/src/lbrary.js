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
let __dirname = path.resolve();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname))
    },
    filename: function (req, file, cb) {
        cb(null, `${file.originalname}`)
    }
})
const upload = multer({ storage: storage })


router.post('/', async(req,res,next) => {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
    const provider = new ethers.providers.JsonRpcProvider("https://matic-mumbai.chainstacklabs.com")
    const signer = wallet.connect(provider)
    const tableLand = await await connect({ signer, network: "testnet", host: polygonTestnet.host, contract: polygonTestnet.contract, chainId: polygonTestnet.chainId })
    try{

        const uploadName = ["Document", req.file.originalname].join('|')

        const web3Storage = new Web3Storage({ token: process.env.WEB3STORAGE_TOKEN })
        console.log(`> 🤖 calculating content ID for ${req.file.originalname}`)

        const document = await getFilesFromPath(path.join(__dirname, `${req.file.originalname}`))
        
        const cid = await web3Storage.put(document, {
            name: uploadName,
            onRootCidReady: (localCid) => {
                console.log(`>CID: ${localCid} `)
                console.log('>Uploading files to web3.storage ')
            }
        })

        const uploadedDocumentUri = `ipfs://${cid}/${req.file.originalname}`
        const insertDocument = await tableLand.write(`INSERT INTO  (id, eventName, eventType, category, eventDate, startTime, endTime, description, organizers, participantsNumber, ticketPrice, eventFile) 
        VALUES ('${value.eventName.toLowerCase()}', '${value.eventName}' , '${value.eventType}', '${value.category}', '${value.eventDate}', '${value.startTime}', '${value.endTime}', '${value.description}', '${value.organizers}', ${Number(value.participantsNumber)}, ${Number(value.ticketPrice)}, '${imageURI}')`);
        
        await fs.unlinkSync(path.join(__dirname, `${req.file.originalname}`))
        res.status(200).json({
            cid,
            uploadedDocumentUri,
            insertDocument
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
        const provider = new ethers.providers.JsonRpcProvider("https://matic-mumbai.chainstacklabs.com")
        const signer = wallet.connect(provider)
        const tableLand = await await connect({ signer, network: "testnet", host: polygonTestnet.host, contract: polygonTestnet.contract, chainId: polygonTestnet.chainId })
        
        const { name } = await tableLand.create(
            `eventName text, eventType text, category text, eventDate text, startTime text, endTime text, description text, organizers text, participantsNumber int, ticketPrice int, eventId text, eventFile text, id text, primary key(id)`,
            `library`
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

router.get('/', async (req, res, next) => {
    try {
        let documents = []
        const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
        const provider = new ethers.providers.JsonRpcProvider("https://matic-mumbai.chainstacklabs.com")
        const signer = wallet.connect(provider)
        const tableLand = await await connect({ signer, network: "testnet", host: polygonTestnet.host, contract: polygonTestnet.contract, chainId: polygonTestnet.chainId })

        const events = await tableLand.read(`SELECT * FROM  blockevents_80001_504`)

        const entries = resultsToObjects(events)

        for (const {id } of entries) {
            let data = {
                'id': id,
            }
            documents.push(data)
        }

        res.status(200).json({
            statusCode: 200,
            message: "Documents fetched",
            data: data
        })
    }
    catch (e) {
        res.status(500).json({
            statusCode: 500,
            error: e.message
        })
    }
})

router.get('/query', async (req, res, next) => {
    try {
        const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
        const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)
        const signer = wallet.connect(provider)
        const tableLand = await await connect({ signer, network: "testnet", host: polygonTestnet.host, contract: polygonTestnet.contract, chainId: polygonTestnet.chainId })

        const events = await tableLand.read(`SELECT * FROM blockevents_80001_504 WHERE id='${req.query.id}'`)
        const entries = resultsToObjects(events)
        res.status(200).json({
            statusCode: 200,
            message: "Document fetched",
            data: entries
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