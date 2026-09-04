// Prints only the names of all users to the console
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    const names = users.map((user) => user.name);
    console.log(names);
  });

// Prints only the emails of the all users to the console
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    const emails = users.map((user) => user.email);
    console.log(emails);
  });

//Finds if there is user with username 'Bret' and prints that users full object
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    //console.log(users);
    const user = users.find((user) => user.username === "Bret");
    console.log(user);
  });
