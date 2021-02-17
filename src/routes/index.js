const { Router } = require('express');
const router = Router();

/*Rutas*/
router.get('/test', (req, res) => {
    const data = {
        "name": "Martin",
        "website": "Pol.com"
    }
    res.json(data);
});

module.exports = router;
