import mongoose from "mongoose";

const PrintingLogSchema = new mongoose.Schema({
    user_id: {
        type: String,
    },
    printer_id: {
        type: String,
    },
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
    ],
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
    number_of_a3: {
        type: Number
    },
    number_of_a4: {
        type: Number
    }
})

export default mongoose.model("printing_logs", PrintingLogSchema);

// {
//     "student_id": "",
//     "printer_id": "",
//     "files": [
//         {
//             "file_id": "",
//             "url": ""
//         },
//         {
//             "field_id": "",
//             "url": ""
//         }
//     ],
//     "started_at": "2017-02-01 11:22:33",
//     "ended_at": "2017-02-01 11:22:33",
//     "configurations": [
//         {
//             "option": "",
//             "value": ""
//         },
//         {
//             "option": "",
//             "value": ""
//         },
//     ],
//     "number_of_a3": 3,
//     "number_of_a4": 5
// 
// 
// }
