//var myname="shaik"
//console.log(myname)
//myname="mahaboob"
//console.log(myname)

/*var data ={
    'name':'shaik',
    'age':28,
    'city':'kurnool'
}

console.log(data)*/

function promisefunc(data){
    return new promisefunc(resolve,reject)=>{
        if (data == 'ok'){
            return resolve('success')
        }else {
            return error('error')
        }

    }
}

promisefunc ('ok').then((item))=>{
    console.log(item)
}).catch((error))=>{
    console.log(error)
}).finally(()=>{
    
})
