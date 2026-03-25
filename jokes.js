const button = document.getElementById("getbtn")
const showApi = document.getElementById("api")

button.addEventListener("click", getJokes)

async function getJokes()
{
    showApi.innerHTML="Loading ...";

    try
    {
        const response = await fetch(
        "https://api.api-ninjas.com/v1/jokes",
        {
            method: "GET",
            headers: {"X-Api-Key" : "q1uPVSG3DWpSxsFG7Ao1FByQlN8nEx0Nj6pBXBDa"}
        });
    
    if(!response.ok)
        throw new Error("API ERROR")

    const data = await response.json()
    displayJokes(data)
    
    }

    catch(error)
    {
        showApi.innerHTML = "Failed to fetch JOKES at the moment , Please try again later!"
        console.error(error)
    }
}

function displayJokes(jokes)
{
    showApi.innerHTML = ""

    const p = document.createElement("p")
    p.innerText = jokes[0].joke
    showApi.appendChild(p);
}