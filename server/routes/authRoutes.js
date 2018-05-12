const router = require('express').Router();

router.get('/test', (req, res) => {
  res.json({ user: 'you are logged in' });
});

module.exports = router;
