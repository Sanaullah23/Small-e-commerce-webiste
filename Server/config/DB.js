const mongoose= require('mongoose');
const dotenv= require('dotenv');
dotenv.config();
// database connection
const DATABASE = async ()=>{
const DB_url= process.env.DATABASE;
 await mongoose.connect(DB_url).then((res)=>{
    console.log('DATABASE CONNECTED')
}).catch((err)=>{
    console.log(`ERROR DATABASE CONNECTION ${err}`)
})
}
//

module.exports=DATABASE