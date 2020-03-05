const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 2003;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./routes'));

app.listen(port, (err) => {
    if (!err)
        console.log(`Listening on ${port}`);
    else
        console.log('Error!' + err);
});
