let formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.email.value = formData.email;
  form.message.value = formData.message;
} else {
  form.email.value = '';
  form.message.value = '';
}

form.addEventListener('input', event => {
  const emailValue = form.email.value.trim();
  const messageValue = form.message.value.trim();
  formData.email = emailValue;
  formData.message = messageValue;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log('Дані користувача: ', formData);
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
