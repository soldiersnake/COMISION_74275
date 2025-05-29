const socket = io();

socket.on('productList', products => {
  const ul = document.getElementById('productList');
  ul.innerHTML = '';
  products.forEach(p => {
    ul.innerHTML += `<li>${p.id} - <strong>${p.title}</strong> - $${p.price}</li>`;
  });
});

document.getElementById('addForm').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  const product = {
    title: form.title.value,
    price: parseFloat(form.price.value)
  };
  socket.emit('addProduct', product);
  form.reset();
});

document.getElementById('deleteForm').addEventListener('submit', e => {
  e.preventDefault();
  const id = parseInt(e.target.id.value);
  socket.emit('deleteProduct', id);
  e.target.reset();
});
