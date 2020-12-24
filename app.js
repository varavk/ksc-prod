const express = require('express');

const app = express();

app.use(express.static('public'));

app.use('/', express.static('public'));
app.use('/home', express.static('public'));
app.use('/dashboard', express.static('public'));
app.use('/makepayment', express.static('public'));
app.use('/payment-history', express.static('public'));
app.use('/profile', express.static('public'));
app.use('/settings', express.static('public'));
app.listen(process.env.PORT || '3000', () => {
    console.log("server started")
})