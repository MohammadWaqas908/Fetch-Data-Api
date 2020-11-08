async function getMethodData() {
    const response =await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log("Response =",response);
    //in this we can fetch the data from the external website or url eaither it can be using get or post
    const data = await response.json();
    console.log("data =",data);    
}
async function postMethodData() {
    const response =await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: "POST",
        body:JSON.stringify({
            title: 'name waqas',
            body: 'data',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    
    
    
    console.log("Response =",response);
    //in this we can fetch the data from the external website or url eaither it can be using get or post
    const data = await response.json();
    console.log("data =",data);    
}


getMethodData();
postMethodData();
