const express = require('express');
const app = express()
const port = 6194;
const worldCup = [
    {
        country: "Argentina",
        player: "Messi",
        coach: "Scaloni",   
    },
    {
        country: "France",
        player: "Mbappe",
        coach: "Deschamps",
    },
    {
        country: "Brazil",
        player: "Neymar",
        coach: "Ancelloti",
    },
    {
        country: "Spain",
        player: "Yamal",
        coach: "Delafuente",
    },
    {
        country: "Germany",
        player: "Kimmich",
        coach: "Flick",
    }



]

app.get('/', (req, res) => {
    res.send('Welcome to Backend Class')
});

app.get('/worldcups', (req, res) => {
    res.send(worldCup)
});

app.get('/hurray', (req, res) => {
    res.send("I built my first api")
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
