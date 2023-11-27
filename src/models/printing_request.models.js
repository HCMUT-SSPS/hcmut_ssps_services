import mongoose from "mongoose";

const PrintingRequestSchema = new mongoose.Schema({
    state_code: {
        type: String,
        enum: ["req_state_uploaded", "req_state_new", "req_state_processing", "req_state_proceeded"],
        require: true,
    },
    order_date: {
        type: Date,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    items: [
        {
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
            ]
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
});

export default mongoose.model("printing_requests", PrintingRequestSchema);

// {
//     "id": "",
//     "state_code": "req_state_uploaded", "req_state_new", "req_state_processing", "req_state_proceeded",
//     "order_date": "2017-02-01 11:22:33",
//     "email": "customer1@hcmut.edu.vn",
//     "items": [
//         {
//             "id": "",
//             "name": "book_hardcover_21x21",
//             "count": "1",
//             "configurations": [
//                 {
//                     "option": "",
//                     "value": ""
//                 },
//                 {
//                     "option": "",
//                     "value": ""
//                 },
//             ],
//             "files": [
//                 {
//                     "file_id": "",
//                     "url": ""
//                 },
//                 {
//                     "field_id": "",
//                     "url": ""
//                 }
//             ]
//         }
//     ]
// }
