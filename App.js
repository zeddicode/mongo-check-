import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import personRoute from './routes/personRoute.js';
import routes from './routes/personRoute.js';
import personController from './controllers/personController.js';
import cors from 'cors';

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 6000;
// Connect to MongoDB

app.get('/', (req, res) => {
    res.send('Welcome to my personal Person runs')
})
app.use('/person', personRoute)
app.use('/', routes)
app/use (cors())


mongoose.connect(process.env.MONGO_URI)

    .then(() => {
        console.log('MongoDB Connected')
    })
    .catch(err => {
        console.log(err)
    })

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })