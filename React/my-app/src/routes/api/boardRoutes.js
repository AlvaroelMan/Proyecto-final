const express = require('express');
const router = express.Router();
router.get('/boards', (req, res) => {
  res.send([
    { name: 'My board', description: 'Mi primera pizarra' }
  ]);
});
module.exports = router;