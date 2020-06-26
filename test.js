/*var mysql=require('mysql');
var conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"movie_db",
    connectionLimit:10
})

conn.connect(function(err){
    if(err)
        throw err;
    console.log('connected');
})

conn.query('select * from MultiplexScreenDetails',(err,result)=>{
    if(err)
        return console.log(" error   : "+err);
    return console.log("result : "+result);
})
*/
import { connect } from 'mongoose';

connect('mongodb://localhost:27017/MyReactApp')
.then(()=>{
    conn.query('select * from MultiplexScreenDetails',(err,result)=>{
        if(err)
            return console.log(" error   : "+err);
        return console.log("result : "+result);
    })
})

