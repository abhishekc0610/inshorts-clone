import mongoose from "mongoose";



const Connection = async (username, password) => {

    const URL = `mongodb://${username}:${password}@clone-inshorts-shard-00-00.zpqvg.mongodb.net:27017,clone-inshorts-shard-00-01.zpqvg.mongodb.net:27017,clone-inshorts-shard-00-02.zpqvg.mongodb.net:27017/?ssl=true&replicaSet=atlas-331ru1-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting with the database", error);
    }
}

export default Connection;