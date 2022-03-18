import express from 'express';
import  usuariosRouter from '../routes/usuario'

class Servidor {

    private app: express.Application;
    private port: string;
    private apiPaths = {
        usersPath:'/api/usuarios'
    }

    constructor(){
        this.app  = express();
        this.port = process.env.PORT || '8080'
        this.routes()
    }

    routes(){
        this.app.use(this.apiPaths.usersPath, usuariosRouter)
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log("server corriendo en puerto "+ "8000")
        })
    }
}

export default Servidor;