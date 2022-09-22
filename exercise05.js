fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    var i=0
    const rdc = json.reduce(r => {
      if(json[i].completed === false){
        return{
          userId: json[i].userId,
          title: json[i].title
        }
      }
      i++
    }, [])
    console.log(rdc)
  })
  .catch(function(err) { 
    console.log(err);
  });