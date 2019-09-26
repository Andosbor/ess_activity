const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_COURSES_QUERY = 'SELECT * FROM course'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Andosbor123',
    database: 'ess_db'
});

connection.connect(err => {
    if(err){
        return err;
    }
});

//console.log(connection);

app.use(cors());

app.get('/', (req,res) => {
  res.send('go to /courses to see courses')
});

app.get('/courses/add', (req,res) => {
    const { id, name, domain, description } = req.query;
    const INSERT_COURSES_QUERY = `INSERT INTO course(id,name, domain, description) VALUES('${name}', ${domain}, ${description})`;
    console.log(id,name,domain,description);
    connection.query(INSERT_COURSES_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else{
            return res.send('successfully added course')
        }
    });

});

app.get('/courses',(req,res) => {
    connection.query(SELECT_ALL_COURSES_QUERY, (err, results) => {
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data: results
            })
        }
    })
})

app.listen(3006, () => {
  console.log('server listening on port 3006')
});