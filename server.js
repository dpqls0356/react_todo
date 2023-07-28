import "dotenv/config";
import express from "express";
import path from "path";
import "./db.js";
import {getTodoList,postTodoList} from "./controllers/todo.js";
import { postJoin, postLogin } from "./controllers/user.js";
const app = express();
const PORT = 8080;

//---------------------------------

app.use(express.json());
import cors from 'cors';
app.use(cors());

//---------------------------------

app.use(express.static('./react/build'));

//---------------------------------

app.route('/login').post(postLogin);
app.route("/join").post(postJoin);
app.route("/todo/:userid").get(getTodoList).post(postTodoList);;
app.get('*', (req, res) => {
    const __filename = new URL(import.meta.url).pathname;
    const __dirname = path.dirname(__filename);
    return res.sendFile(path.join(__dirname, 'react', 'build', 'index.html'));
});



//---------------------------------

const handleServer = () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleServer);
