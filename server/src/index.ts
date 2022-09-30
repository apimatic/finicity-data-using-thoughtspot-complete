import dotenv from 'dotenv'
import express from 'express';
import { router } from './finicity';
import * as thoughtspot from './thoughtspot';

dotenv.config();

const port = process.env.SERVER_PORT;

const app = express();

app.use("/", router);
app.use("/api", thoughtspot.router)

app.listen(port);