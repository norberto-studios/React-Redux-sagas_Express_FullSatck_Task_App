import md5 from 'md5';
import {v4 as uuid} from 'uuid';
import { connectDB } from "./connect-db";

const authenticationToken = [];

async function assembleUserState(user){
    let db = await connectDB();

    let task = await db.collection(`tasks`).find({owner: user.id}).toArray();
    let group = await db.collection(`groups`).find({owner: user.id}).toArray();

    return {
        task,
        group,
        session:{
            authenticated: `AUTHENTICATED`, id:user.id 
        }
    }
}

export const authenticationRoute = (app) =>{
    console.log(app)
    app.post('/authenticate', async (req, res)=>{
        let {username, password} = req.body;
        let db = await connectDB();
        let collection = db.collection(`users`);

        let user = await collection.findOne({name:username});

        if(!user){
            console.log("User Not Found")
            return res.status(500).send('User Not Found!');
        };

        let hash = md5(password);
        let passwordCorrect = hash === user.passwordHash;

        if(!passwordCorrect){
            return res.status(500).send('Password Is Incorrect!');
        };

        let token = uuid();

        console.log("TOKEN----------",token)
        authenticationToken.push({
            token,
            userID: user.id
        })

        let state = await assembleUserState(user);

        res.send({token,state})
    })
}