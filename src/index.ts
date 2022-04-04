import express from 'express';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/', (req, res) => {
    console.log('This endpoint was hit');
    res.send('Hit that');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
