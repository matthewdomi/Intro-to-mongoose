const {Schema, model} = required("mongoose");


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName : String,

    LastName: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    gender: String,

   
    
});
 

module.exports = (userSchema, model)
