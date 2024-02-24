const express = require('express')
const {deleteAccessories} = require('../controllers/accessories')
const {deleteMen} = require('../controllers/men')
const {deleteHome} = require('../controllers/home')
const {deleteKids} = require('../controllers/kids')
const {deleteNewIn} = require('../controllers/newIn')
const {deleteWomen} = require('../controllers/women')
const router = express.Router()


router.get("/accessories/:id", deleteAccessories)
router.get("/men/:id", deleteMen)
router.get("/home/:id", deleteHome)
router.get("/kids/:id", deleteKids)
router.get("/newin/:id", deleteNewIn)
router.get("/women/:id", deleteWomen)




module.exports = router