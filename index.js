const express = require('express');
const ejs = require('ejs');

const pageRouter = require('./routes/pages');
const blogRouter = require('./routes/blog');
const projectRouter = require('./routes/projects');

const app = express();
const port = process.env.PORT || 9000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', pageRouter);
app.use('/blogs',blogRouter);
app.use('/projects', projectRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})