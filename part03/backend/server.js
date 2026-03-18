import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "A joke",
            content: "Why did the chicken cross the road?"
        },
        {
            id: 2,
            title: "A joke",
            content: "Why did the chicken cross the road?"
        },
        {
            id: 3,
            title: "A joke",
            content: "Why did the chicken cross the road?"
        },
        {
            id: 4,
            title: "A joke",
            content: "Why did the chicken cross the road?"
        },
        {
            id: 5,
            title: "A joke",
            content: "Why did the chicken cross the road?"
        }
    ];
    res.send(jokes);
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`)
})