const comment = document.getElementById('message')
const formcontact = document.getElementById('formcontact')
const contacterr = document.getElementById('contacterr')

formcontact.addEventListener('submit',(e) => {
    let messages=[]
    if(comment == null)
    {
        messages.push('The message cannot be null')
    }
    if(comment.value.length>10)
    {
        messages.push('Message cannot be more than 100 characters')
    }
    if(messages.length>0)
    {
        e.preventDefault()
        contacterr.innerText=messages.join('_')
    }
})