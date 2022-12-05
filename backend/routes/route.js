const express = require("express")

const router = express.Router()
const {createCustomer,getCustomers,getCustomerById,updateCustomer,deleteCustomer} = require("../controller/userController")


router.post("/createCustomer" , createCustomer)
router.get("/selectCustomers", getCustomers);
router.post("/selectCustomerById", getCustomerById);
router.post("/updateCustomer",updateCustomer)
router.post("/deleteCustomer", deleteCustomer);
module.exports = router