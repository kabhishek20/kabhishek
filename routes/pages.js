const express = require("express");
const router = express.Router();
const fs = require("fs");

const field = ["Data Science", "Web Development", "Game Development"];
const aboutfield = [
  "I am deeply passionate about data science, as it combines my love for statistical analysis and machine learning to uncover meaningful insights from complex datasets",
  "I admire web development because it allows me to creatively solve problems and bring ideas to life through interactive and visually appealing websites",
  "This combines my love for storytelling and technology. Creating immersive experiences that captivate players and bring virtual worlds to life is my passion",
];
const target=['datascience','webdevelopment','gamedevelopment'];
const logo = [
  "HTML",
  "CSS",
  "Javascript",
  "React.js",
  "Node.js",
  "OpenAI-Frameworks",
  "SQL",
  "EJS-Engine",
  "Socket.io",
  "MongoDB",
  "ExpressJS",
  "Computer-Vision",
  "Python",
  "C/C++",
  "C#",
  "Machine-Learning",
  "Artificial-Intelligence",
  "Large-Language-Models(GPT3.5,PaLM-2)",
];

router
  .route("/")
  .get((req, res) => {
    res.render("homePage");
  })
  .post((req, res) => {
    const data = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    };

    fs.appendFile("message.txt", JSON.stringify(data) + "\n", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Data saved successfully");
      }
    });

    res.render("homePage");
  });

router.route("/about").get((req, res) => {
  res.render("aboutPage");
});

router.route("/utilities").get((req, res) => {
  res.render("utilitiesPage", {
    logo: logo,
  });
});

router.route("/projects").get((req, res) => {
  res.render("projects", {
    field: field,
    aboutfield: aboutfield,
    target: target
  });
});

router.route("/contacts").get((req, res) => {
  res.render("contactPage");
});

module.exports = router;
