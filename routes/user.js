const express = require("express");
const router = express.Router();
const user = require("../models/user.js");
const passport = require("passport");

router.get("/signUp", (req, res) => {
    res.render("users/signup.ejs");
});

router.post("/signup", async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new user({ username, email });
        const registerUser = await user.register(newUser, password);
        console.log(registerUser);
        req.login(registerUser, (err) => {
            if(err){
                return next(err);
            };
            req.flash("success", "Welcome to MongoShop");
            res.redirect("/show");
        })
    } catch (error) {
        req.flash("error", error.message);
        console.log(error);
        res.redirect("/signup");
    };
});

router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

router.post("/login",
    passport.authenticate("local", {
        failureRedirect: './login',
        failureFlash: true
    }),
    async (req, res) => {
        req.flash("success","Welcome to MongoShop! You logged in!")
        res.redirect("/show");
    });

router.get("/logout", (req,res,next) => {
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("success","you are logged out!");
        res.redirect("/show");
    }); //req.logout take as a callback as a parameter
});

module.exports = router;
