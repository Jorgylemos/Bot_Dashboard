import { Request, Response, NextFunction } from 'express'
import { TOKEN } from '../../config'

export function isAuthorizated(req: Request, res: Response, next: NextFunction){
    try {
        const authHeader = req.headers['authorization']

        if(!authHeader){
            res.status(401).send("Unauthorizated")
            throw new Error("Has a error!")
        }

        const [authType, token] = authHeader.split(' ') // ['Bearer', 'admin'] is [authType, token]

        if(authType !== 'Bearer' || token !== TOKEN) {
            res.status(403).send("Forbidden")
            throw new Error("Has a error from token request")
        }

        next()

    } catch(err) {
        console.error("🔴 Error: ", err)
    }
}