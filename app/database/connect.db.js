import { ifError } from "assert";
import path from "path";
import sqlite3 from "sqlite3";

const dpPath = path.resolve(process.cwd(), 'app/database/local.database.db')

const db = new sqlite3.Database(dpPath, (error)=>{
    if (error) throw error
    console.log("Connect database success!")
})



export default db;