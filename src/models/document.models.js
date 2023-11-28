import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "items",
    },
    name: {
        type: String
    },
    count: {
        type: Number,
        require: true
    },
    configurations: [
        {
            option: {
                type: String
            },
            value: {
                type: String
            }
        }
    ],
    files: [
        {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "files",
            },
            url: {
                type: String,
                require: true
            }
        }
    ]
})

export default mongoose.model("documents", DocumentSchema);
