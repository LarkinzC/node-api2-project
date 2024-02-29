// implement your posts router here
const express = require('express')
const Post = require('./posts-model')
const router = express.Router()

router.get('/', (req, res) => {    
    Post.find()
    .then(found => {
        res.json(found)
    })
    .catch(err => {
        res.status(500).json({
            message: "The posts information could not be retrieved",
            err: err.message
        })
    })
})

router.get('/:id', async (req, res) => {    
    try {
        const quote = await Post.findById(req.params.id)
        if (!quote) {
            res.status(404).json({
                message: "The post with the specified ID does not exist"
            }) 
        } else {
            res.status(200).json(quote)
        }
    } catch(err)  {
        res.status(500).json({
            message: "The post information could not be retrieved",
            error: err.message
        })
    }

})

router.post('/',  (req, res) => {    
    const quote = req.body
    

})

router.delete('/:id', (req, res) => {    
    

})

router.put('/:id', (req, res) => {    
    

})

router.get('/:id/messages', (req, res) => {    
    

})




module.exports = router