import express from 'express'
import axios from 'axios'
const app = express();


app.get('/',  async(req, res) => {
    console.log("in main router");
    
    await axios.get('http://ip-api.com/json')
    .then((resp) => {
        res.send(resp.data);
    })
    .catch((err) => {
        res.send(err);
    })
})

app.listen(8000, ()=> {
    console.log(`listening on port 8000`);
})