module.exports.isLoggedIn = (req,res,next) => {
    if(!req.isAuthenticated()) {
        req.flash("error","you must be logged in to create new product!");
        return res.redirect("/login");
    }
    next();
};