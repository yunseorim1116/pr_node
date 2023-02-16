const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log(res)
    console.log(req)
    const a = { userName :"seorim",age :"20"};
    res.send( a.userName )
    res.json({
        success: true,
    });

});

app.get('/hello', (req, res) => {
    res.send( 'HelloWorld!' )
    res.json({
        success: true,
    });
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${process.env.PORT}`);
});