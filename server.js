import "dotenv/config";
import express from "express";
import path from "path";
import "./db.js";
const app = express();
const PORT = 8080;

app.use(express.json());
import cors from 'cors';
app.use(cors());

app.use(express.static('./react/build'));

const postLogin = ()=>{
    console.log("굿");
}
app.route('/login').post(postLogin);
app.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
const handleServer = () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleServer);
