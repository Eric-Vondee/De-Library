import express from "express";
import multer from 'multer';
import path from 'path';
import fs from 'fs'
import * as dotenv from 'dotenv'
import { ethers } from 'ethers'
import { connect, resultsToObjects, SUPPORTED_CHAINS } from '@tableland/sdk'
import { Web3Storage, getFilesFromPath } from 'web3.storage'
import { title } from "process";
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


router.post('/', upload.single('file'), async(req,res,next) => {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)
    const signer = wallet.connect(provider)
    const tableLand = await await connect({ signer, network: "testnet", host: polygonTestnet.host, contract: polygonTestnet.contract, chainId: polygonTestnet.chainId })
    try{
        const {description, category, title} = req.body
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
        const insertDocument = await tableLand.write(`INSERT INTO library_80001_683 (id, description, category, uploadDate, documentURL)VALUES ('${title.toLowerCase()}', '${title}', '${description}' , '${category}', '${new Date()}', '${uploadedDocumentUri}' )`);
        
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
        const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)
        const signer = wallet.connect(provider)
        const tableLand = await await connect({ signer, network: "testnet", host: polygonTestnet.host, contract: polygonTestnet.contract, chainId: polygonTestnet.chainId })
        
        const { name } = await tableLand.create(
            `title text, description text, category text, uploadDate text, documentURL text, id text, primary key(id)`,
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
        const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)
        const signer = wallet.connect(provider)
        const tableLand = await await connect({ signer, network: "testnet", host: polygonTestnet.host, contract: polygonTestnet.contract, chainId: polygonTestnet.chainId })

        const events = await tableLand.read(`SELECT * FROM  library_80001_683`)

        const entries = resultsToObjects(events)

        for (const {id, title, description, category, uploadDate, documentURL } of entries) {
            let data = {
                'id': id,
                'title': title,
                'description': description,
                'category': category,
                'uploadDate': uploadDate,
                'documentURL': documentURL
            }
            documents.push(data)
        }

        res.status(200).json({
            statusCode: 200,
            message: "Documents fetched",
            data: documents
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

        const events = await tableLand.read(`SELECT * FROM library_80001_683 WHERE id='${req.query.id}'`)
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