import mongoose, { mongo } from "mongoose";

// {
//     "printer_id": "",
//     "manufacturer": "",
//     "model": "",
//     "description": "",
//     "status": ["DISABLED", "ENABLED"],
//     "campus": "",
//     "building": "",
//     "room": ""
// }

const PrinterSchema = new mongoose.Schema({
    manufracturer: {
        type: String,
        require: true
    },
    model: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ["DISABLED", "ENABLED"],
        required: true,
        default: "ENABLED"
    },
    campus: {
        type: String,
        require: true
    },
    building: {
        type: String,
        require: true
    },
    room: {
        type: String,
        require: true
    },
});

export default mongoose.model("printers", PrinterSchema);