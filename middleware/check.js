
exports.checkName = (req, res, next) => {
    const username = req.body.username;
        if(username === "abdo" || username ==="zakaria" || username === "feda"){
            next();
            return
        }
        res.json({
            msg : "غير مسموح لك باجراءالعملية",
            state : 0
        })
}

exports.validation = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    if(username === "zakaria" && password === "12345"){
        next();
        return;
    }

    res.json({
        msg : "غير مصرح لك بالدخول",
        state : 0
    })

 
}
