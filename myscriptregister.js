const name = document.getElementById('name')
const email = document.getElementById('email')
const mobile = document.getElementById('mobile')
const password = document.getElementById('password')
const repassword = document.getElementById('re-password')
const username = document.getElementById('username')
const form = document.getElementById('form')
const errorElem = document.getElementById('error')


form.addEventListener('submit',(e) => {
    let messages=[]
    if(password.value.length<6)
    {
        messages.push('password must be more than 6 characters')
    }
    if(password.value.length>20)
    {
        messages.push('password must be less than 20 characters')
    }
    if(password.value != repassword.value)
    {
        messages.push('The password re-entered is not same')
    }
    if(messages.length>0)
    {
        e.preventDefault()
        errorElem.innerText=messages.join('_')
    }
})