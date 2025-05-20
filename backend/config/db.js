const mongoose = require("mongoose")

const connectDatabase = async() => {
try {
      await mongoose.connect(process.env.URL) 
      console.log("Databse Connected Successfully")

    
} catch (error) {
    console.error("Database Connection failed", error.message)
    
}

}
module.exports = connectDatabase