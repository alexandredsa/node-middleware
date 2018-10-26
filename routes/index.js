const auth = require("../middlewares/auth");
module.exports = (app) => {
    app.get("/health", (req, res, next) => {
        res.json(200, { status: "It's fine =)" });
        next();
    });

    app.get("/proxy/auth", auth);
}

