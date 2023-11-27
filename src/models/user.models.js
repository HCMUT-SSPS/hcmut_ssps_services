import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    // {
    //     "first_name": "",
    //     "last_name": "",
    //     "email": "",
    //     "id": "",
    //     "phone": "",
    //     "city": "",
    //     "description": "",
    //     "isAdmin": boolean,
    // }
    first_name: {
        type: String,
        require: true,
    },
    last_name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
    },
    city: {
        type: String,
    },
    description: {
        type: String,
    },
    is_admin: {
        type: Boolean,
        require: true
    }
});

export default mongoose.model("users", UserSchema);
