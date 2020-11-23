
const consultTemplate = ({email, message}) =>
  `<body>
    <p>Новое обращение о получении консультации с сайта stream.ru</p>
    <p><b>Отправитель:</b> ${email}</p>
    <p><b>Текст обращения:</b> ${message}</p>
  </body>`

const callMeBackTemplate = ({name, phoneNumber}) =>
  `<body>
    <p><b>Новый запрос об обратном звонке с сайта stream.ru</b></p>
    <p><b>Имя:</b> ${name}</p>
    <p><b>Телефон:</b> ${phoneNumber}</p>
  </body>`

module.exports = {
  consultTemplate, callMeBackTemplate
}
