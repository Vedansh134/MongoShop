const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
    image : {
        //default : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtF3tQDs3Skpkqsm9JkSu6wFy7IswzPkC84g&s",
        type : String,
        set : (v) => v === "" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtF3tQDs3Skpkqsm9JkSu6wFy7IswzPkC84g&s" : v,
    },
    image2 : {
        //default : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtF3tQDs3Skpkqsm9JkSu6wFy7IswzPkC84g&s",
        type : String,
        set : (v) => v === "" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtF3tQDs3Skpkqsm9JkSu6wFy7IswzPkC84g&s" : v,
    },
    image3 : {
        type : String,
        set : (v) => v === "" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtF3tQDs3Skpkqsm9JkSu6wFy7IswzPkC84g&s" : v,
    },
    image4 : {
        type : String,
        set : (v) => v === "" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtF3tQDs3Skpkqsm9JkSu6wFy7IswzPkC84g&s" : v,
    },
    brandname : {
        type : String,
        default : "anonymous",
        required : true
    },
    product : {
        type : String,
        required : true
    },
    color : {
        type : String,
        default : "red",
    },
    // color: {
    //     type: [Number],
    //     default : "red",
    //     required: true,
    //     validate: {
    //         validator: function(v) {
    //             return v.length === 3 && v.every(n => n >= 0 && n <= 255);
    //         },
    //         message: props => `${props.value} is not a valid RGB color.`
    //     }
    // },
    price : {
        type : Number,
        required : true
    },
    cutprice : {
        type : Number,
        default : 999,
        required : true
    },
    discount : {
        type : String,
        default : "50%",
        required : true
    },
    delivery : {
        type : String,
        default : "Free delivery",
        required : true
    },
    emi : {
        type : Boolean,
        required : true
    },
    features : {
        type : [String], // Changed to an array of strings
        required : true
    },
    description : {
        type : String,
        required : true
    },
});

const item = mongoose.model("shop", shopSchema);
console.log(item)
module.exports = item;