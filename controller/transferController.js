const express = require('express');
const router = express.Router();
const transferService = require('../service/transferService');

router.post('/', (req, res) => {
  const { from, to, value } = req.body;
  const result = transferService.transferValue({ from, to, value });
  if (result.error) return res.status(400).json({ error: result.error });
  res.status(201).json(result.transfer);
});

router.get('/', (req, res) => {
  const transfers = transferService.getAllTransfers();
  res.json(transfers);
});

module.exports = router;
