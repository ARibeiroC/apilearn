import mongoose from "mongoose"

async function connectDatabase(){

    mongoose.set("strictQuery", false)
    await mongoose.connect(
        'mongodb+srv://ribeiro:Ww7ijJsZwDZW7WQG@cluster0.hbmfgyw.mongodb.net/?retryWrites=true&w=majority')

}

export default connectDatabase