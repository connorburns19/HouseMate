const express = require('express');
const app = express()

const path = require('path');

var environment = process.env.NODE_ENV || 'production';

const cors = require('cors')
if (environment !== 'production') { app.use(cors()) }

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/"];
    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404);
    }

    // send index.html
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});