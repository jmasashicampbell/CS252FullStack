const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const multer = require('multer')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const upload = multer({
    dest: '../frontend/public/images/',
    limits: {
        fileSize: 10000000
    }
});

// connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/cs252', {
    useNewUrlParser: true
});

const homeworkSchema = new mongoose.Schema({
    assignmentNum: String,
    chapterNum: String,
    exercises: String,
    dueDate: String,
    show: Boolean,
});
const Homework = mongoose.model('Homework', homeworkSchema);

app.post('/api/homework', async (req, res) => {
    const homework = new Homework({
        assignmentNum: req.body.assignmentNum,
        chapterNum: req.body.chapterNum,
        exercises: req.body.exercises,
        dueDate: req.body.dueDate,
        show: req.body.show,
    });
    try {
        await homework.save();
        res.send(homework);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/api/homework', async (req, res) => {
    try {
        const homeworks = await Homework.find({
            show: true
        });
        res.send(homeworks);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/api/homework/all', async (req, res) => {
    try {
        const homeworks = await Homework.find();
        res.send(homeworks);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/api/homework/:id', async (req, res) => {
    try {
        const homework = await Homework.findOne({
            _id: req.params.id
        });
        res.send(homework);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

app.put('/api/homework/:id', async (req, res) => {
    try {
        let homework = await Homework.findOne({
            _id: req.params.id
        });
        homework.assignmentNum = req.body.assignmentNum;
        homework.chapterNum = req.body.chapterNum;
        homework.exercises = req.body.exercises;
        homework.dueDate = req.body.dueDate;
        homework.show = req.body.show;
        homework.save();
        res.send(homework);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.delete('/api/homework/:id', async (req, res) => {
    try {
        await Homework.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

app.listen(3000, () => console.log('Server listening on port 3000!'));

