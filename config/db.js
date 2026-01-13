const mongoose = require("mongoose")

async function main(){
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("mongoose conected with database")
    } catch (error) {
        console.error("ERROR:",error)
    }
}

module.exports=main