const logger = require("../utils/logger");

async function printHelloWorld(req,res,next) {
    try {
        const helloResponse = await fetch('http://34.135.103.160/api/hello');
        const worldResponse = await fetch('http://35.226.36.24/api/world')

        if (!helloResponse.ok) {
            logger.error(`Failed to fetch hello: ${helloResponse.statusText}`);
            return res.status(500).send('Failed to fetch hello data.');
        }
        if (!worldResponse.ok) {
            logger.error(`Failed to fetch world: ${worldResponse.statusText}`);
            return res.status(500).send('Failed to fetch world data.');
        }

        const helloData = await helloResponse.text();
        const worldData = await worldResponse.text();

        res.send(`${helloData.replace(/^"|"$/g, '')} ${worldData.replace(/^"|"$/g, '')}`);

    } catch(err) {
        res.status(500).send('Failed to fetch the data.');
    }
}

module.exports = {
    printHelloWorld
};