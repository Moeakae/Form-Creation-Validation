
    async function fetchUserData() {
        try { 
        
           const fetchUserData = await getfetchUserData();
           const record = await setUpfetchUserData(fetchUserData);
           const response = await processfetchUserData();
            
      // Define the APIURL
      const apiUrl = 'https://jsonplaceholder.typicode.';
      // Make a GET request fetch(apiUrl)  
         } .then response => { if(!response,ok) 
        throw new Error("Network response was not ok"); { 
        return ('response')
        }  
    // Select the Data container element
    const response = await fetch('https://api-data.tracking.com/current.json')
    .then((response) => response.json(()
    .then ((data) => console.log(data));
    const record = await response.json();
    document.getElementById('date').innerHTML = record.data[0].date;
    document.getElementById('positive').innerHTML = record.data[0].positive;
    document.getElementById('death').innerHTML = record.data[0].death;
    document.getElementById('deathIncrease').innerHTML = record.data[0].deathIncrease;
      }
      fetchUserData(); 
    
    }
 
    
        
    

