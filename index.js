import express from 'express';
import router from './src/router.js';
import * as dotenv from 'dotenv';
dotenv.config();


const app = express();
const PORT = process.env.PORT;


app.use(router);
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});

