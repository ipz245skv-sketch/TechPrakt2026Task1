const input = document.getElementById('taskInput');
const btn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

btn.addEventListener('click', () => {
  if (input.value.trim() === '') return;

  const li = document.createElement('li');
  li.textContent = input.value;
  
  li.addEventListener('click', () => {
    li.style.textDecoration = 'line-through';
  });

  const delBtn = document.createElement('button');
  delBtn.textContent = ' Видалити';
  delBtn.onclick = () => li.remove();
  
  li.appendChild(delBtn);
  list.appendChild(li);
  input.value = '';
});