const helpers = {};

helpers.isAuthenticated = async (req, res, next)=>{
    if( await req.isAuthenticated()){
        return next();
    }
    req.flash('error_msg', 'Not Authorized');
    res.redirect('/users/signin');
}
module.exports = helpers