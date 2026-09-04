// People older than 18

fetch("https://randomuser.me/api/?results=20")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const adults = data.results.filter((user) => user.dob.age > 18);
    console.log(adults);
  });

// Count of people older than 30

fetch("https://randomuser.me/api/?results=20")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const adults = data.results.filter((user) => user.dob.age > 30);
    console.log(adults.length);
  });

// Names of all people younger than 25

fetch("https://randomuser.me/api/?results=20")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const adults = data.results
      .filter((user) => user.dob.age < 40) // Using 40 because no users under 25 were returned
      .map((user) => user.name.first);

    console.log(adults);
  });
