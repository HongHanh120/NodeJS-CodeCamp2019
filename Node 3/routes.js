const express = require('express');
const router = express.Router();

const postCtrl = require('./controllers/controller');

router.get("/", (request, response) => {
        response.send('Hello, world!');
});


router.post("/todos", postCtrl.create);
router.get("/todos/:id", postCtrl.getObject);
router.post("/todos/:id", postCtrl.updateTitle);
router.post("/todos/:id/toogle", postCtrl.updateStatus);
router.delete("/todos/:id", postCtrl.del);

module.exports = router;