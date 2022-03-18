import express from 'express';

class Servidor {

    private app: express.Application;
    private port: string;

    constructor(){
        this.app  = express();
        this.port = process.env.PORT || '8000'
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log("server corriendo en puerto "+ "8000")
        })
    }
}

export default Servidor;