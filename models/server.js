const express = require('express');

const cors = require('cors');

const { dbConnect } = require('../db/config')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;


        this.paths= {
            userLogin    : '/login',
            recipePost   : '/new',
            recipeGet    : '/recipe',
            recipePut    : '/recipe',
            recipeDelete : '/recipe',
            recipeUpload : '/uploads',

        }

        this.database();

        this.middlewares();

        this.routes();
    }


    async database() {
        await dbConnect();
    }


    middlewares() {

        this.app.use(cors());

        this.app.use(express.json());

    }


    routes() {
        this.app.use(this.paths.recipePost, require('../routes/recipe-post'));
        this.app.use(this.paths.recipeGet, require('../routes/recipe-get'));
        this.app.use(this.paths.recipePut, require('../routes/recipe-put'));
        this.app.use(this.paths.recipeDelete, require('../routes/recipe-delete'));
        this.app.use(this.paths.recipeUpload, require('../routes/uploads'));
        this.app.use(this.paths.userLogin, require('../routes/user-login'));



    }

    listen() {
        this.app.listen(this.port, () => console.log('PORT:', this.port));
    }
}

module.exports = Server;