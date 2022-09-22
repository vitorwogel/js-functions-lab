fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {

    const answer1 = json.filter(r => r.completed === true)
    const answer2 = answer1.map(r => r.userId)
    const answer3 = answer2.reduce((total) => {
        return{
            userId: total++
        }
    }, 0)
    console.log(answer3)
  })
  .catch(function(err) { 
    console.log(err);
  });