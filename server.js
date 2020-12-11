// Настройки
const setup = { port: 8000 };

// Подключаем express
const express = require("express");
// создаем приложение
const app = express();

const path = require("path");

// Подключаем multer
const multer = require("multer");
// Включаем multer
const upload = multer();
app.use(upload.array());
app.use(express.static("pub"));

// Подключаем body-parser
const bodyParser = require("body-parser");
// Включаем body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Подключаем почтальона
const nodemailer = require("nodemailer");

// Подключаем Монгуса
const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var VoteSchema = new Schema({
    name: { type: String },
    votes: { type: Number, default: 0 },
});
// Компилируем модель из схемы
var VoteModel = mongoose.model("VoteModel", VoteSchema);


app.use(express.static("pub"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/send/", function(req, res) {
    async function main() {
        let transporter = nodemailer.createTransport({
            host: "smtp.yandex.ru",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: "user",
                pass: "pass",
            },
        });
        let info = await transporter.sendMail({
            from: '"Заявка с сайта" <info@vkusno-zdorovo.ru>', // sender address
            to: "info@vkusno-zdorovo.ru", // list of receivers
            subject: req.body.name, // Subject line
            text: "Имя: " +
                req.body.name +
                "/ Телефон: " +
                req.body.phone +
                " / Комментарий:" +
                req.body.comment, // plain text body
            html: "Имя: <b>" +
                req.body.name +
                "</b><br>Телефон: <b>" +
                req.body.phone +
                "</b><br>Комментарий: <b>" +
                req.body.comment +
                "</b>", // html body
        });
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    }
    console.log(req.body);
    main().catch(console.error);
    res.send("recieved your request!");
});

// Отправить результаты в БД
app.post("/vote", (req, res) => {
    mongoose.connect(
        "mongodb+srv://user:welcome88@cluster0.ofoab.mongodb.net/Cluster0?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
    );

    mongoose.Promise = global.Promise;

    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function() {
        // we're connected!
        console.log("connected");
    });

    VoteModel.findOneAndUpdate({ name: req.body.vote }, { $inc: { votes: 1 } },
        function(err, response) {
            if (err) {
                console.log(err);
            } else {
                console.log("updated");
            }
        }
    );

    return res.json({
        success: true,
        message: "Спасибо. Ваш голос был учтен",
    });
});

app.get("/vote/json", (req, res) => {
    mongoose.connect(
        "mongodb+srv://user:welcome88@cluster0.ofoab.mongodb.net/Cluster0?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
    );

    mongoose.Promise = global.Promise;

    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function() {
        // we're connected!
        console.log("connected");
    });

    VoteModel.find({}, function(err, users) {

        if (err) return console.log(err);
        res.send(users)
    });
});

app.get("/vote", (req, res) => {
    res.sendFile(path.join(__dirname + "/pub/votes.html"));
});

app.get("/vote/results", (req, res) => {
    res.sendFile(path.join(__dirname + "/pub/stats.html"));
});

// Слушаем порт и при запуске сервера сообщаем
app.listen(setup.port, () => {
    console.log("Сервер: порт %s - старт!", setup.port);
});