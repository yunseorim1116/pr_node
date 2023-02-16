function view (res){
    console.log('리퀘스트 핸드러 콜-> 뷰')
}

function create (res){
    console.log('request 핸들러 콜-> create');
}

let handle ={}; 

handle['/'] = view;
handle['/view'] = view;
handle['/create'] = create;

exports.handle;