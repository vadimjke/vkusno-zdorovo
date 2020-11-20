// Настройки
const setup = {port:8000}
// Подключаем express
const express = require ('express'); 
// создаем приложение
const app = express ();

const path = require('path');

app.use(express.static('pub'));

app.get('/', (req, res) => {    
  res.sendFile(path.join(__dirname+'/index.html'));
});


// Слушаем порт и при запуске сервера сообщаем
app.listen(setup.port, () => {
  console.log('Сервер: порт %s - старт!', setup.port);
});