// implement your posts router here
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {    
    res.status(200).json("foo")
})

router.get('/:id', (req, res) => {    
    

})

router.post('/', (req, res) => {    
    

})

router.delete('/:id', (req, res) => {    
    

})

router.put('/:id', (req, res) => {    
    

})

router.get('/:id/messages', (req, res) => {    
    

})




module.exports = router