const { Router } = require('express')

const router = Router()

// Mock Users
const frameworks = [{ name: 'Nuxt' }, { name: 'Express' }, { name: 'Tailwind' }]

/* GET users listing. */
router.get('/frameworks', function (req, res) {
    res.json(frameworks)
})

module.exports = router
