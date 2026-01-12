import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://yashhhh:923923923000@cluster0.bitlu0w.mongodb.net/TasteExpress').then(()=>console.log("DB Connected"));
}