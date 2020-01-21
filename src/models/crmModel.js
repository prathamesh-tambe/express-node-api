import mongoose from 'mongoose';

const schema = mongoose.Schema;  

export const contactSchema = new schema({
    firstName : {
        type : String,
        required : "Please enter first name"
    },
    lastName : {
        type : String,
        required : "Please enter last name"
    },
    email : {
        type : String
    },
    company : {
        type : String
    },
    phone : {
        type : Number
    },
    created_date : {
        type : Date,
        default : Date.now
    }
});