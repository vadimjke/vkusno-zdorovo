// Настройки
const setup = {port:8000}

// Подключаем express
const express = require ('express'); 
// создаем приложение
const app = express ();

// Подключаем multer
const multer = require('multer');
// Включаем multer
const upload = multer();
app.use(upload.array()); 
app.use(express.static('pub'));

// Подключаем body-parser
const bodyParser = require('body-parser');
// Включаем body-parser
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

// Подключаем почтальона
const nodemailer = require("nodemailer");

const path = require('path');

app.use(express.static('pub'));

app.get('/', (req, res) => {    
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/send/', function(req, res){
  async function main() {
  let transporter = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'user', 
      pass: 'pass', 
    },
  });
  let info = await transporter.sendMail({
    
    from: '"Заявка с сайта" <info@vkusno-zdorovo.ru>', // sender address
    to: "info@vkusno-zdorovo.ru", // list of receivers
    subject: req.body.name, // Subject line
    text: "Имя: " + req.body.name + "/ Телефон: " + req.body.phone + " / Комментарий:" + req.body.comment, // plain text body
    html: "Имя: <b>" + req.body.name + "</b><br>Телефон: <b>" + req.body.phone + "</b><br>Комментарий: <b>" + req.body.comment +"</b>", // html body
  });
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}
  console.log(req.body);
  main().catch(console.error);
  res.send("recieved your request!");
});

// Слушаем порт и при запуске сервера сообщаем
app.listen(setup.port, () => {
  console.log('Сервер: порт %s - старт!', setup.port);
});