
 exports.check = (req, res, next) => {
    const name = req.body.name;

    if( name === "rashad" || name === "abdo"|| name === "zakaria"|| name === "feda"){
        next();
        return;
    }
    res.json({
        msg: "أنتَ غير مصرح لعمل هذه العملية"
    })
    
 }

   exports.validation = ( req, res, next) =>{
    const username = req.body.username;
    const password = req.body.password;

    if (username.trim() === "" || password.trim() === "") {
        return res.json({
            msg: 'الرجاء ادخال البيانات',
            state: 0
        })
    }

    if (username.trim() === "zakraia" && password.trim() === "12345") {
        next();
        return
    }
    

    if (username.trim() !=="zakraia" && password.trim() !== "12345") {
        return res.json({
            msg:" انتَ غير مصرح لهذه العملية",
            state: 0
        })

    }

   }





