//your JS code here. If required.
// async function to fetch data from the API
async function fetchTodo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); // parse JSON body
    console.log(data);                  // log the response body
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// call the function
fetchTodo();