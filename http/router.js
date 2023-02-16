function route (handle, pathname,res) {
    if(typeof handle[pathname] === 'function'){
        handle[pathname]();
    }else{
        console.log('not found  ! ! !! !');
        res.write('404 Not found');
    }
    console.log('about to route for' +pathname)
}

exports.route = route