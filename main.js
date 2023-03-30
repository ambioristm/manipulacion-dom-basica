const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

//h1.innerHTML = 'Hola este texto <br> viene desde JS.'; //nos imprime codigo html.
//h1.innerText = 'Hola este texto <br> viene desde JS.';  //nos imprime texto.
h1.classList.add('rojo'); //nos permite agregar clases a nuestros elementos html desde js.
h1.classList.remove('verde'); //nos permite remover clases a nuetros elementos html desde js.
h1.classList.toggle('verde'); //nos permite agregar o quitar clases a nuestros elementos html desde js.
h1.classList.contains('verde'); //nos devuelve true or false dependiendo de si tiene o no la clase indicada nuestro elemento html.

input.value = '1234'; // podemos modificar el valor de nuestro input en el html.

//document.createElement('img'); //nos permite crear elementos html desde js.
const img = document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg');

pid.append(img); //una de las formas con las que podemos insertar imagen en nuestro html.