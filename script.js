 // Actualizar año en el footer
 document.getElementById('year').textContent = new Date().getFullYear();

 // Función para alternar el tema
 function toggleTheme() {
     const body = document.body;
     const themeIcon = document.querySelector('.theme-toggle i');
     
     body.classList.toggle('dark');
     
     if (body.classList.contains('dark')) {
         themeIcon.classList.remove('fa-sun');
         themeIcon.classList.add('fa-moon');
         localStorage.setItem('theme', 'dark');
     } else {
         themeIcon.classList.remove('fa-moon');
         themeIcon.classList.add('fa-sun');
         localStorage.setItem('theme', 'light');
     }
 }

 // Funciones para el modal
 function showMessage() {
     document.getElementById('messageModal').style.display = 'flex';
 }

 function closeModal() {
     document.getElementById('messageModal').style.display = 'none';
 }

 // Cerrar modal al hacer clic fuera de él
 window.onclick = function(event) {
     const modal = document.getElementById('messageModal');
     if (event.target === modal) {
         modal.style.display = 'none';
     }
 }

 // Cerrar modal con la tecla Escape
 document.addEventListener('keydown', function(event) {
     if (event.key === 'Escape') {
         document.getElementById('messageModal').style.display = 'none';
     }
 });

 // Aplicar el tema guardado al cargar la página
 document.addEventListener('DOMContentLoaded', (event) => {
     const savedTheme = localStorage.getItem('theme');
     if (savedTheme === 'dark') {
         document.body.classList.add('dark');
         document.querySelector('.theme-toggle i').classList.remove('fa-sun');
         document.querySelector('.theme-toggle i').classList.add('fa-moon');
     }
 });