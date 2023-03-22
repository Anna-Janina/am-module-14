// const editHandler = async function(event) {
//     event.preventDefault()

//     const commentId = event.target.dataset.commentId // assuming the comment ID is stored in a data attribute of the clicked element
//     const commentEl = document.querySelector(`#comment-${commentId}-textarea`)

//     const response = await fetch(`/api/comments/${commentId}`, {
//         method: 'PUT',
//         body: JSON.stringify({
//             comment: commentEl.value,
//         }),
//         headers: { 'Content-Type': 'application/json' },
//     })

//     if (response.ok) {
//         // Do something, e.g. display a success message
//     } else {
//         alert('edit failed')
//     }
// }

// document.querySelectorAll('.edit-button').forEach(button => {
//     button.onclick = editHandler
// })
