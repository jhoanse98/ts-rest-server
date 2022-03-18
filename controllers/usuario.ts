import {Request, Response} from 'express'


export const getUsuarios = ( req:Request, res:Response) => {

    res.json({
        msg: 'Desde getUsuarios'
    })
}

export const getUsuario = ( req:Request, res:Response) => {

    const {id} = req.params;
    res.json({
        msg: 'Desde getUsuario',
        id
    })
}

export const postUsuarios = ( req:Request, res:Response) => {

    const {body} = req
    res.json({
        msg: 'Desde postUsuarios',
        body
    })
}

export const putUsuarios = ( req:Request, res:Response) => {

    const {id} = req.params;
    const {body} = req
    res.json({
        msg: 'Desde putUsuarios',
        body
    })
}

export const deleteUsuarios = ( req:Request, res:Response) => {

    const {id} = req.params;
    res.json({
        msg: 'Desde deleteUsuarios',
        id
    })
}