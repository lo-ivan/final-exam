
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://ivanlo:ivanlo123@cluster0.bpwp3bp.mongodb.net/BookList";

mongoose.connect(uri, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true   }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connected successfully.");
})
const bookRouter = require('./routes/booklist');

app.use('/book', bookRouter);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});