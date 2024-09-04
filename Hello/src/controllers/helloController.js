function printHello(req, res, next) {
    try {
        res.status(200).json("Hello");
    } catch(err) {
        next(err);
    }
}

module.exports = {
    printHello
};