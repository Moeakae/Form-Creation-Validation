document.addEventListener("DOMContentLoaded",() => {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholdertypicode.com/user';
        const dataContainer = document.getElementById('api-data');
    try {
        // fetch user data fron API
        const response = await fetch(apiUrl);
        const user = await response.json();
        // Clear the "Loading user data..." message
        dataContainer.innerHTML = '';
        // Create a <ul> element
        const userList = document.createElement('ul');
        // Loop through the user data and display each name in a <li> element
        user.forEach(user => {
            const listItem =document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) { 
        //Handle errors by displaying a message
        dataContainer.innerHTML = 'failed to loa user date.';

    }
}
// Invoke the fetchUserData function after the DOMis fully loaded
fetchUserData();
});

    
        
    

