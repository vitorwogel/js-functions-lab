fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
  
    const titles = json.map(title => title.title)
    console.log(titles)
    /*
    const completed = json.filter(
        json => json.completed === true
    );

    completed.forEach( (todo, index) => {
        console.log(`${todo.title} - ${todo.completed}`)
    })
*/  
  })
  .catch(function(err) { 
    console.log(err);
  });