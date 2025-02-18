// breadcrumb.js
function crearBreadcrumb() {
    const breadcrumb = document.getElementById('breadcrumb');
    const pathArray = window.location.pathname.split('/').filter(path => path !== '');
  
    // Estilos para el breadcrumb
    breadcrumb.style.backgroundColor = '#f8f9fa'; // Color de fondo gris claro
    breadcrumb.style.padding = '10px';
    breadcrumb.style.width = '100%'; // Ancho completo
    breadcrumb.style.display = 'flex'; //布局flex
    breadcrumb.style.alignItems = 'center'; // Centrar verticalmente
  
    pathArray.forEach((path, index) => {
      const link = document.createElement('a');
      link.href = `/${pathArray.slice(0, index + 1).join('/')}`;
      link.textContent = path.charAt(0).toUpperCase() + path.slice(1);
  
      // Estilos para los enlaces
      link.style.color = '#007bff'; // Color azul
      link.style.textDecoration = 'none';
      link.style.marginRight = '5px'; // Espacio entre enlaces
  
      breadcrumb.appendChild(link);
  
      if (index < pathArray.length - 1) {
        const separator = document.createElement('span');
        separator.textContent = '/';
  
        // Estilos para el separador
        separator.style.color = '#6c757d'; // Color gris
        separator.style.marginRight = '5px';
  
        breadcrumb.appendChild(separator);
      }
    });
  }