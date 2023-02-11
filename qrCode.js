const QRCode = require('qrcode')

function qrGenerator(url) {
    QRCode.toFile('./qrCode.png', url, {type: 'png'} , (err) => {
    if(err) throw err;
        console.log("QR generated!")
    })
}
module.exports = function (url) {
    qrGenerator(url)
}

// "qrcode": "^1.5.1"