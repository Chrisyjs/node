
// db/index.js
const mongoose = require('./db')
const Schema = mongoose.Schema;
 
const userSchema = new Schema({
  username: String,
  password: String
});
 
const MyModel = mongoose.model('user', userSchema);
 
 
class Mongodb {
  constructor () {
 
  }
// 查询
  query (username) {
     return new Promise((resolve, reject) => {
       MyModel.findOne({username}, (err, res) => {
         if(err) {
           reject(err)
         }
         resolve(res ? res.toObject() : {})
       })
     })
  }
// 保存
  save (obj) {
     const m = new MyModel(obj)
     return new Promise((resolve, reject)=> {
       m.save((err, res) => {
         if (err) {
           reject(err)
         }
         resolve(res)
         console.log(res)
       })
     })
     
  }
}
module.exports = new Mongodb()