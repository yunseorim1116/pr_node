// module.exports = function(app)
// {
//      app.get('/',function(req,res){
//         res.render('index.html')
//      });
//      app.get('/about',function(req,res){
//         res.render('about.html');
//     });
// }

module.exports = function(app, fs)
{
     app.get('/',function(req,res){
        console.log('실행!')
         res.render('index', {
             title: "MY HOMEPAGE",
             length: 5
         })
     });
}