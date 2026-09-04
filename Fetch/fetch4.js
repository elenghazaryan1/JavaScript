//Prints the number of posts that user has
fetch("https://jsonplaceholder.typicode.com/posts?userId=2")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.length);
  });

//Print only the titles of the posts
fetch("https://jsonplaceholder.typicode.com/posts?userId=2")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const titles = data.map((posts) => posts.title);
    console.log(titles);
  });

// Finds post with id:15 , if it doesn't exist print 'not found'
fetch("https://jsonplaceholder.typicode.com/posts?userId=2")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const id = data.find((post) => post.id === 15);
    console.log(id || "not found");
  });
