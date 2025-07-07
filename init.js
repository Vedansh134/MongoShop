const mongoose = require("mongoose");
const item = require("./models/shop.js");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/shopmart");

    let prod = [
        {
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsowD70yS2phz0F908HbHORkoDdUWWitWkuQ&s",
            brandname : "polo",
            product : "shirt",
            color : "black",
            price : 599,
            cutprice : 999,
            discount : "85% off",
            delivery : "FREE DELIVERY",
            emi :  false,
            features : ["good","nice","cotton"],
            description : "latest trendy boy causual shirt"
        }
    ];

    await item.insertMany(prod);
    console.log("data insert successfully");
};

main()
    .then(()=>{
        console.log("data insert successfully");
    }).catch((err)=>{
        console.log("error in database or may be in query");
    });

