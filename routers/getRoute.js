const express = require('express')
const User = require('../models/userModel')
const {showAccessories} = require('../controllers/accessories')
const {showMen} = require('../controllers/men')
const {showHome} = require('../controllers/home')
const {showKids} = require('../controllers/kids')
const {showNewIn} = require('../controllers/newIn')
const {showWomen} = require('../controllers/women')
const router = express.Router()


router.get("/data/men", showMen)
router.get("/data/kids", showKids)
router.get("/data/home", showHome)
router.get("/data/accessories", showAccessories)
router.get("/data/newIn", showNewIn)
router.get("/data/women", showWomen)

module.exports = router