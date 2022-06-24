const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#game-name').value;
    const description = document.querySelector('game-desc').value;
    if (name && description) {
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({
                name,
                description
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to Create Game ');
        }
    }
};
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete Game');
      }
    }
  };
  
  document
    .querySelector('.new-game-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.game-list')
    .addEventListener('click', delButtonHandler);