let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • 
│ • 
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay [089647417373]
│ • 
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
