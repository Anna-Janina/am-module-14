const commentHandler = async function(event) {
    event.preventDefault()

    const commentEl = document.querySelector('#comment-textarea')

    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
            comment: commentEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
        // Do something, e.g. display a success message
    } else {
        alert('comment failed')
    }
}

document.querySelector('#comment-form').onclick(commentHandler)
