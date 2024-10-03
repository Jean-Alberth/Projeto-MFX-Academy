import db from "./../database/connect.db.js"

export const searchUsers = ()=>{
    return new Promise((resolve, reject)=>{

        let query = 'SELECT * FROM user'

        db.all(query, [],  (error, row)=>{
            if (error) {
                console.error(error.message)
            }else{
                console.log(row)
                resolve(row)
            }
        })
})}

searchUsers()