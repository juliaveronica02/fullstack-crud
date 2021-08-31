const Data = require("../models/crud")
const DataModels = require("../models/crud")

module.exports = {
    create: (req, res) => {
        DataModels.create({
            username: req.body.username,
            email: req.body.email,
            description: req.body.description
        })
        .then((result)=> res.json(result))
        .catch((err)=> {throw err})
    },
    getAllData: (req,res) => {
        DataModels.findAll()
        .then((result)=> res.json(result))
        .catch((err)=> res.json(err))
    },
    updateDataById: (req, res) => {
        DataModels.update({
            username: req.body.username,
            email: req.body.email,
            description: req.body.description
        }, {where: {id: req.params.dataId}})
        .then((result)=>{return res.status(200).json(result)})
        .catch((err)=> {throw err})
    },
    deleteDataById: (req, res) => {
        DataModels.destroy({where:{id:req.params.dataId}})
        .then((result)=> res.json(result))
        .catch((err)=> res.json(err))
    }
}