const express = require ('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Api server is ready')
  })


module.exports = {
    userRouter: router
}