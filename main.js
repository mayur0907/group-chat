// Store the username in local storage when the user submits it
const form = document.querySelector('#username-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const username = form.elements.username.value;
  localStorage.setItem('username', username);
  window.location.href = '/';
});

// Show the send message form if the user is logged in
const username = localStorage.getItem('username');
if (username) {
  const sendMessageForm = document.querySelector('#send-message-form');
  sendMessageForm.style.display = 'block';
  sendMessageForm.addEventListener('submit', event => {
    event.preventDefault();
    const message = sendMessageForm.elements.message.value;
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push({ username, message });
    localStorage.setItem('messages', JSON.stringify(messages));
    // Add the message to the page
    const messagesList = document.querySelector('#messages-list');
    const messageItem = document.createElement('li');
    messageItem.textContent = `${username}: ${message}`;
    messagesList.appendChild(messageItem);
  });
}
