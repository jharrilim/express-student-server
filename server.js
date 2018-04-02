//--------------EXPRESS SERVER-------------------
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const Mongoose = require('./config/db/mongoose');
const Express = require('./config/express');
const port = 3000;
class App extends Express {

    constructor(port=3000) {
        super();
        //this.db = Mongoose();
        this.port = port;
        this.listen(port, () => console.log(`assignment1 app listening on port: ${port}`));
    }

    get config() {
        return this.express;
    }

    get port() {
        return this.port;
    }

    set port(p) {
        this.port = p;
    }

}

module.exports = new App();
