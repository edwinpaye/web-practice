function showNotification() {
  const notificationContainer = document.getElementById('notification-container');

  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = 'This is a notification toast';

  notificationContainer.appendChild(notification);

  setTimeout(() => {
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        notification.remove();
      }, 300); // Same duration as CSS transition
    }, 3000); // 3 seconds before auto-dismiss
  }, 100); // Delay to allow CSS transition to trigger
}
