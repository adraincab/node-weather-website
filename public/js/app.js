const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    // prevent default event that refreshes page
    e.preventDefault()

    const location = search.value
    
    messageOne.textConetent = 'Loading...'
    messageTwo.textContent = ''

        fetch('/weather?address=' + location).then((response) =>{
        response.json().then((data) => {
            if(data.error){
                messageOne.textContent = data.error
            }else{
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
       

            }
            
        })
    })
})