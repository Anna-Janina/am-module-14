const loginHandler = async function(event) {
    event.preventDefault()

    const emailEl = document.querySelector('#InputEmail')
    const passwordEl = document.querySelector('#Password')

    const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            email: emailEl.value,
            password: passwordEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert('loign fialed')
    }
}

document.querySelector('#login-form').onclick(loginHandler)