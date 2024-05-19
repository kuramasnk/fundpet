document.addEventListener('DOMContentLoaded', function () {
    const formularioContacto = document.getElementById('formulario-contacto');
  
    formularioContacto.addEventListener('submit', function (event) {
      event.preventDefault(); // Evitar el envío del formulario por defecto
      
      // Validar que los campos obligatorios estén completos
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();
      const motivo = document.getElementById('motivo').value.trim();
      const preferencia = document.querySelector('input[name="preferencia"]:checked');
      
      if (nombre === '' || email === '' || mensaje === '' || motivo === '' || !preferencia) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
      }
  
      // Si se seleccionó un archivo, validar su extensión (puedes añadir más extensiones si lo deseas)
      const archivo = document.getElementById('archivo').value;
      if (archivo && !/\.(jpg|jpeg|png|gif)$/i.test(archivo)) {
        alert('Por favor, seleccione un archivo de imagen válido.');
        return;
      }
  
      // Enviar el formulario si todos los campos están completos y el archivo es válido
      formularioContacto.submit();
    });
  });
  