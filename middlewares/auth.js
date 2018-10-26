const axios = require("axios");

const baseURL = 'http://www.mocky.io/v2/';

const createInstance = (token) => {
    return axios.create({
        baseURL,
        headers: { 'Authorization': token }
    });
}

const authenticate = (req, res, next) => {
    const { token } = req.query;

    if (!token) {
        res.send(401);
        next();
        return;
    }

    const instance = createInstance(token)
    instance.get('5bd279703400006600cfdd75')
        .then(response => {
            res.send(response.data);
            next();
        })
        .catch(err => {
            console.error(err);
            res.send(400);
            next();
        })
};

module.exports = authenticate;