const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./router/main')(app);//라우터 모듈인 main.js 를 불러와서 app 에 전달해준다.

app.set('views', __dirname + '/views'); //서버가 읽을 수 있도록 Html의 위치 설정
app.set('view engine', 'ejs'); //ejs npm i 설치
app.engine('html', require('ejs').renderFile); //렌더링 할때 ejs 쓸 것이라고 명시

const server = app.listen(3000, function(){
    console.log('Express server has started on port 3000')
})

app.use(express.static('public'));

//14-> 해당 코드는 Express 애플리케이션에서 정적 파일을 제공하기 위해 사용되는 미들웨어 함수를 등록하는 코드
// 여기서 express.static은 Express에서 제공하는 내장 미들웨어 함수로, 정적 파일을 제공하기 위한 미들웨어 역할을 함
// express.static 함수의 인자로는 정적 파일이 위치한 디렉토리 경로를 전달
// 위의 코드에서는 public이라는 디렉토리에 정적 파일이 위치해 있고, 이를 express.static 함수의 인자로 전달하여 정적 파일을 서비스할 수 있도록 설정하고 있다.

// 따라서 위 코드는 public 디렉토리에 위치한 정적 파일을 Express 애플리케이션에서 제공하기 위한 미들웨어 함수를 등록하는 코드이다.



// app.get('/', (req, res) => {
//     console.log(res)
//     console.log(req)
//     const a = { userName :"seorim",age :"20"};
//     res.send( a.userName )
//     res.json({
//         success: true,
//     });

// });

// app.get('/hello', (req, res) => {
//     res.send( 'HelloWorld!' )
//     res.json({
//         success: true,
//     });
// });

// app.listen(port, () => {
//     console.log(`server is listening at localhost:${process.env.PORT}`);
// });