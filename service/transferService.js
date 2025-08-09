const { users } = require('../model/userModel');
const { transfers } = require('../model/transferModel');

function transferValue({ from, to, value }) {
  const sender = users.find(u => u.username === from);
  const recipient = users.find(u => u.username === to);
  if (!sender || !recipient) {
    return { error: 'Remetente ou destinatário inválido' };
  }
  if (!recipient.favorecido && value >= 5000) {
    return { error: 'Transferência acima de R$ 5.000,00 só é permitida para favorecidos' };
  }
  const transfer = { from, to, value, date: new Date() };
  transfers.push(transfer);
  return { transfer };
}

function getAllTransfers() {
  return transfers;
}

module.exports = {
  transferValue,
  getAllTransfers,
};
