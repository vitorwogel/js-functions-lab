fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
  
    const userTitle = json.filter(uncompleted => uncompleted.completed === false)
        .map(uncompleted => {
            return{
                userId: uncompleted.userId,
                title: uncompleted.title
            }
        })

    console.log(userTitle)
    
  })
  .catch(function(err) { 
    console.log(err);
  });