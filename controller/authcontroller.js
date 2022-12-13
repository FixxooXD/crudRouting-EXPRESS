

module.exports.getSignup = function getSignup(req, res){
  res.sendFile('public/views/signUpForm.html',{root:__dirname})
}
