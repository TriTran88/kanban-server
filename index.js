const express = require('express');
const config = require('./config')
const cors = require('cors');
const db = require('./bootstrap/mongo');
db.connect();
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


const routes = require('./routes')
routes(app)
const port = config.port;
app.listen(port, () => console.log(`Server running on port ${port}`));