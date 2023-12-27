
exports.checkName = (req, res, next) => {
    const username = req.body.username;
        if(username === "abdo"){
            next();
            return
        }

        res.json({
            msg : "غير مسموح لك باجراءالعملية"
        })
}

exports.validation = (req, res, next) => {
    const username = req.body.username;
    if(username === "zakaria"){
        res.json({
            msg : "لست مصرحا بالدخول",
        })
    }

    next();
    return;
}
