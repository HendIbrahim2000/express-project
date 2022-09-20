/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip='
const zipCode = document.getElementById('zip')
const APIKey = '&units=metric&appid=6c00e68254d3a0098758bf0bd115bfc9'
const feelings = document.getElementById('feelings')
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),        
  });

    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};
async function getTemp(zipCode){
    url = baseURL+ zipCode.value + APIKey;
    const request = await fetch(url);
    try {
        // Transform into JSON
        const allData = await request.json()
            return allData.main.temp
        }
        catch(error) {
          console.log("error", error);
        }
}
async function retrieveData (url){ 
    const request = await fetch(url);
    try {
    // Transform into JSON
    const allData = await request.json()
    return allData
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
    
  };
  async function updateUI() {
    const req = await fetch('/get_data')
    try {
        // Transform into JSON
        const allData = await req.json()
        console.log(allData)
        
        document.getElementById('temp').innerText = allData.temperature
        document.getElementById('date').innerText = allData.date
        document.getElementById('content').innerText = allData.user_response
        }
        catch(error) {
          console.log("error", error);
          // appropriately handle the error
        }
        
        
  }
async function generateZipCode() {
    const temp = await getTemp(zipCode)
    postData('/save',{temperature: temp, date: newDate, user_response: feelings.value})
    .then(updateUI())
    
}

document.getElementById('generate').addEventListener('click', generateZipCode)






/* Function to GET Web API Data*/

/* Function to POST data */


/* Function to GET Project Data */