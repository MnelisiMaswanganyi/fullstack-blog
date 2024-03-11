import mysql2 from 'mysql2';
import express from 'express';

const connection = mysql2.createConnection(
    {
        host: "localhost",
        database: "blog",
        user: "root",
        password: "Mnelisi@5236",
    }
);

const app  = express();

const PORT = 5001

app.listen(PORT, () => {
    console.log('server : http://localhost:${PORT}');
    connection.connect((err) =>{
        if (err) throw err;
        console.log("DATABASE CONNECTED");
    })
    })
app.use("/all", (req, res) =>{
    const sql_query = 'select * from articles'
    connect.query(sql_query, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});