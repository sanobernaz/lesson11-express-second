


async function getAllBands(){
    //Fetch all data from the rest API
    const response = await fetch('http://localhost:3000/bands');
    // Convert data to JSON
    const data = await response.json();
    // Display the data
    showBands(data);

} 

function showBands(bands)
{
    // Create html for each band
    let html = '';
    for (let{name,genre} of bands)
     {
        html += `<p>${name}-${genre}</p>`;
    }
    // show html in browser
    document.querySelector('#bands').innerHTML=html;
 }

 async function addBand(){
    //Attach event listener to form
    document.getElementById('bandForm').addEventListener('submit', async(event)=>{
        event.preventDefault();
        //Get name and genre from input field
        const name = document.getElementById('bandName').value;
        const genre = document.getElementById('bandGenre').value;

        // Create object to send through POST request
        const band ={
            name: name,
            genre: genre

        };

        console.log(band);
        //The post request
        const response = await fetch('http://localhost:3000/bands',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body:JSON.stringify(band)
        });
        // Convert response
        const result = await response.json();
        // Log result
        console.log(result);
        //show bands again
        getAllBands();


    })
}

 getAllBands();
 addBand();