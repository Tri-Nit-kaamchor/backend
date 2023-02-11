const router = require('express').Router()
const DocterModel = require('../models/doctor.model')


///api/v1/doctor

router.post('/doctorDetails', async (req, res)=>{

    const publicKey =  req.body.publicKey
    const licenseNumber = req.body.licenseNumber
    const hospital = req.body.hospital
    const name = req.body.name

    try {
        let dbRes = await DocterModel.find({publicKey})
        
        if(dbRes.length != 0){
            console.log("dbRes",dbRes)
            res.status(200).json({
                ...dbRes._doc
            })
            return

        }else{
            let newDbRes = await DocterModel.create({
                publicKey,
                licenseNumber,
                hospital,
                name
            })

            res.status(200).json({
                ...newDbRes._doc
            })
            return 

        }

        
    } catch (error) {
        
    }


})


module.exports = router