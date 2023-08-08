let datas=require("../model/get");

exports.create=(req,res)=>{
    const chk=new datas({
        name:req.body.name,
        age:req.body.age,
        phone:req.body.phone,
        email:req.body.email,
        ten:req.body.ten,
        twelve:req.body.twelve,
        degree:req.body.degree,
        stream:req.body.stream
    });6
    chk.save().then(doc=>{
        console.log(doc)
        res.redirect("/");
    })
}
exports.find=(req,res)=>{
    datas.find()
    .then(user=>{
        res.send(user);
    })
    .catch(err => {
        res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
    })
}