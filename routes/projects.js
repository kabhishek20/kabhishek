const express = require('express');
const router = express.Router();


const data_title = [
  'YOLO Object Detection',
  'Document Querying System',
  'Real-Time Emotion Detection',
]

const data_about =[
  'The model can identify any chess piece and name it accordingly  whether it is a king, queen, bishop, knight, pawn, or rook.',
  'The model can answer user queries based on certain documents. It uses GPT-3.5 for embedding and FAISS for similarity search.',
  'The model can detect the emotion of a person in real-time. It can detect emotions like happy, sad, angry, surprised, etc.'
]

const data_link =[
  'https://github.com/kabhishek20/YOLO_ChessMaster',
  'https://github.com/kabhishek20/PDF_question_answering',
  'https://github.com/kabhishek20/Realtime_Facial_Emotion_Detection'
]

const web_title = [
  'Blog With Kumar',
  'Know about Kumar',
  'Chat with Kumar',
]

const web_about =[
  'A simple blogging website where you can read blogs written by Kumar. You can also write your own blog and post it on the website.',
  'A website where you can know about Kumar. You can know about his likes, hobbies, projects, and the fields he is interested in.',
  'A chatting application where you can chat with Kumar. You can ask him about his projects, hobbies, and the fields he is interested in.'
]

const web_link =[
  'https://github.com/kabhishek20/blogg',
  'https://github.com/kabhishek20/kabhishek',
  '/blogs/1'
]


router.route('/datascience')
.get((req, res) => {
  res.render('datasciencePage',
    {
      data_title: data_title,
      data_about: data_about,
      data_link: data_link
    }
  )
})

router.route('/webdevelopment')
.get((req, res) => {
  res.render('webdevelopmentPage',
    {
      web_title: web_title,
      web_about: web_about,
      web_link: web_link
    }
  )
})

router.route('/gamedevelopment')
.get((req, res) => {
  res.render('gamedevelopmentPage')
})

module.exports = router;