import express from "express";

  
const app = express();
const PORT = 8000;
const winningnumber = [];
  
app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

app.use(express.json());
app.post('/api/checkticket', (req, res)=>{
    let count = 0;
    for(let i = 0; i < winningnumber.length; i++){
        if(req.body.numbers[i] == winningnumber[i]){
            count++;
        }
    }
    let amount = "";
    if(count == 1){
        amount = "$5";
    } else if(count == 2){
        amount = "$10";
    } else if(count == 3){
        amount = "$15";
    } else if(count == 4){
        amount = "$100";
    } else if(count == 5){
        amount = "$100000";
    } else {
        amount = "You Lose";
    }
    res.send(`${count} number(s) match, ${amount}`);
});
  
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    for(let i = 0; i < 5; i++){
        winningnumber.push(Math.floor(Math.random() * 15) +1)
    }

    console.log(winningnumber);
});