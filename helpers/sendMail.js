const nodemailer = require('nodemailer')
const crd = require('PATH_TO_YOUR_FILE_CONTAINING_CREDENTIALS')

exports.SendInvoiceMail = async (email,attachmentUrl) => {
    const mail = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: { user: crd.user1 , pass: crd.pass1 },
    })
}

mail.sendMail({
    from: 'hi@company.com',
    to: [email],
    subject: 'Whatever you want',
    html: message,
    attachments: [{
        filename: 'Receipt.pdf',
        path: attachmentUrl,
        contentType: 'application/pdf'
      }]
}, (err) => {
    if (err) throw err;
    console.log(`Invoice Mail sent to ${email}`)
    return true
})
return true
