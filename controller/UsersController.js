

exports.LoginUser = (req, res) => {
    const username = req.body.username;
    if(username.trim === ""){
        res.json({
            msg : "الرجاء التأكد من ادخال البيانات",
            state : 0
        })
    }
    res.json({
        msg: "تم تسجيلك بنجاح",
        state: 1
    })


}

exports.SignUpUser = (req, res) => {


}

