fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
  
    const allCompleted = json.filter(all => all.completed === true)
    const todoAcumulator = allCompleted.reduce(total => total+=1, 0)
    console.log(todoAcumulator)
  })
  .catch(function(err) { 
    console.log(err);
  });