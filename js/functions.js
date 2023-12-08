
   function RelojEnTiempoReal() {
    const relojElemento = document.getElementById('reloj');

    function actualizarReloj() {
      const ahora = new Date();
      const horas = ahora.getHours();
      const minutos = ahora.getMinutes();
      const segundos = ahora.getSeconds();

      const tiempo = `${horas}:${minutos}:${segundos}`;
      relojElemento.textContent = tiempo;
    }

    actualizarReloj(); // Agregamos esta línea para mostrar la hora desde el principio
    setInterval(actualizarReloj, 1000); // Actualizar cada segundo
  }




let contadorCarrito = 0;

function AñadirAlCarrito() {
contadorCarrito++;
alert(`Producto añadido al carrito. Total: ${contadorCarrito}`);
}



function CambiarFondo() {
  const body = document.body;

  body.style.background = getRandomColor(); 
}
function CambiarColorEnlacesPrincipal() {
  const enlacesPrincipal = document.querySelector('.enlaces-principal');

  enlacesPrincipal.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

  RelojEnTiempoReal();