const {Schema, model} = require("mongoose");


const productsSchema = new Schema({

    name:{
        type: String,
        require: true
    },
    description: {
        type: String,
        required: true,
        minLegth: 10,
    },
    price:{
        type: Number,
        required: true,
        min: 0,


    },

    quantity:{
        type: Number,
        required: true,
        min:0
    },
},
    {
            timestamps: true
    }
   
);

module.exports = model("Product", productsSchema)