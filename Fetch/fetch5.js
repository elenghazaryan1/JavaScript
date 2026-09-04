// // Prints only completed tasks
// fetch("https://jsonplaceholder.typicode.com/todos?userId=3")
//   .then((response) => {
//     return response.json();
//   })
//   .then((tasks) => {
//     const completed = tasks.filter((task) => task.completed === true);
//     console.log(completed);
//   });
// // Prints only incomplete tasks
// fetch("https://jsonplaceholder.typicode.com/todos?userId=3")
//   .then((response) => {
//     return response.json();
//   })
//   .then((tasks) => {
//     const incomplete = tasks.filter((task) => task.completed === false);
//     console.log(incomplete);
//   });

// // The total count of tasks and how many are completed

fetch("https://jsonplaceholder.typicode.com/todos?userId=3")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const completed = data.filter((task) => task.completed === true);
    const countOfTasks = data.map((task) => task.completed);
    console.log(`Completed ${completed.length} of ${countOfTasks.length}`);
  });
