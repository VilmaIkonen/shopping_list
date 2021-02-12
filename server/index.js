import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import noteRoutes from './routes/noteRoutes.js';

const app = express();

app.use('/notes', noteRoutes) // path for all notes start .../notes

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

dotenv.config();
const CONNECTION_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);