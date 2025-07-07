const express = require("express");
const router = express.Router();
const shopItems = require("../models/shop.js");
const { isLoggedIn } = require("../middleware.js");

// route for show
router.get("/", async (req, res) => {
    let items = await shopItems.find();
    res.render("items/show.ejs", { items });
});

// route for form for add route
router.get("/add",isLoggedIn,(req, res) => {
    console.log(req.user);
    //req. obj. inside user related info.
    // if(!req.isAuthenticated()){
    //     //with the help of passport session store user info.
    //     req.flash('error',"you must be logged in to create new item");
    //     return res.redirect("/login");
    // }
    res.render("items/create.ejs");
});

router.post("/add", isLoggedIn, async (req, res) => {
    let { image ,image2,image3, image4, brandname, item, color, price, cutprice, discount, delivery, emi, feature, desc } = req.body;

    //Error handling for missing image data  
    // if(!images || !Array.isArray(images) || images.length === 0){  
    //     req.flash("error", "Please provide at least one image URL.");  
    //     return res.redirect('/show/add');  
    // }

    try {  
        // const imageUrls = images.split(',').map(url => url.trim()).filter(url => url !== ''); //Remove empty entries
        let newItem = new shopItems({  
            image: image,
            image2: image2,
            image3: image3,
            image4: image4,
            brandname,  
            product: item,  
            color,  
            price,  
            cutprice,  
            discount,  
            delivery,  
            emi: emi === 'on' ? true : false, //Ensure emi is a boolean  
            features: feature.split(',').map(feature => feature.trim()),  
            description: desc,  
        });  

        await newItem.save();  
        req.flash("success", "New Product Created!");  
        res.redirect("/show");  
    } catch (err) {  
        console.error("Error saving item:", err);  
        req.flash("error", "Error creating product. Please try again.");  
        res.redirect('/show/add');  
    }
});

// route to see item
router.get("/:id", async (req, res) => {
    let { id } = req.params;
    let itemId = await shopItems.findById(id);
    console.log(itemId);
    res.render("items/item.ejs", { itemId });
});

//route for edit form
router.get("/:id/edit", isLoggedIn, async (req, res) => {
    let { id } = req.params;
    let itemId = await shopItems.findById(id);
    console.log(itemId);
    res.render("items/edit.ejs", { itemId });
});

//route for edit in mongoDB
router.put("/:id/edit", isLoggedIn,async (req, res) => {
    let { id } = req.params;
    let { image,image2,image3, image4, brandname, product, color, price, cutprice, discount, delivery, emi, features, description } = req.body; // Simplified destructuring   brandname

    try {
        let updateItems = await shopItems.findByIdAndUpdate(id, { image,image2,image3, image4, brandname, product, color, price, cutprice, discount, delivery, emi, features: features.split(',').map(feature => feature.trim()), description }, { runValidators: true, new: true });
        //features: features.split(',').map(feature => feature.trim()), //handle features as comma-separated string  
        if (!updateItems) {
            return res.status(404).json({ message: "Item not found in database" });
        }
        //res.json({ message: "Item updated successfully", item: updateItems }); // Return updated item
        req.flash("success","Product Updated!");
        return res.redirect(`/show/${id}`);
    } catch (error) {
        console.error("Error updating item:", error); // Log the error for debugging
        res.status(500).json({ message: "Error updating item", error: error.message }); // Include error details
    };
});

// route for delete
router.delete("/:id/delete", isLoggedIn, async (req, res) => {
    let { id } = req.params;
    let deleteItem = await shopItems.findByIdAndDelete(id);
    console.log("item delete from mongodb",deleteItem);
    req.flash("success","Product delete!");
    res.redirect("/show");
});

module.exports = router;


// router.delete("/:id/delete", isLoggedIn, async (req, res) => {
//     try {
//         const id = req.params.id;
//         // Validate the ID (e.g., using Mongoose's ObjectId.isValid)
//         if (!mongoose.Types.ObjectId.isValid(id)) {
//             return res.status(400).send("Invalid item ID");
//         }

//         const deleteItem = await shopItems.findByIdAndDelete(id);

//         if (!deleteItem) {
//             return res.status(404).send("Item not found");
//         }

//         console.log("Item deleted:", deleteItem);
//         res.redirect("/show");
//     } catch (error) {
//         console.error("Error deleting item:", error);
//         res.status(500).send("Error deleting item"); // Or a more user-friendly error message
//     }
// });