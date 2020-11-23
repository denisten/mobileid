const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const {callMeBackTemplate, consultTemplate} = require('./templates')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())

  server.post('/api/send-mail',  async (req, res) => {
    const transporter = nodemailer.createTransport({
      host: "10.10.140.24",
      port: 25,
      secure: false,
      auth: {
        user: null,
        pass: null,
      }
    });
    const {type, data} = req.body
    let result;
    try {
      switch (type) {
        case 'callMeBack':
          result = await transporter.sendMail({
            from: ``,
            to: process.env.INBOX_MAIL,
            subject: 'Запрос обратного звонка',
            html: callMeBackTemplate(data)
          });
          break;
        case 'consult':
          result = await transporter.sendMail({
            from: ``,
            to: process.env.INBOX_MAIL,
            subject: 'Запрос обратного звонка',
            html: consultTemplate(data)
          });
          break;
        default:
          res.status(400);
      }
      res.send({response: result?.response, status: 200})
    } catch (e) {
      res.status(500)
    }
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(process.env.APP_PORT, (err) => {
    if (err) throw err
    console.log(`> Read on http://localhost:${process.env.APP_PORT}`)
  })
})
