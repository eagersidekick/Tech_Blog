const deleteFormHandler = async function(event) {
    console.log("clicked", event)
    event.preventDefault();

    const postId = document.getElementById('post-id')

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          post_id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
}

document.querySelector("#delete-btn").addEventListener("click", deleteFormHandler);