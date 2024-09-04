function printWorld(req, res, next) {
    try {
        res.status(200).json("World");
    } catch(err) {
        next(err);
    }
}

module.exports = {
    printWorld
};