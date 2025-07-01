// Configuración de EmailJS para EM STUDIOS
export const emailConfig = {
  // Credenciales de EmailJS - Reemplaza con tus datos reales
  USER_ID: 'YOUR_USER_ID',      // Tu User ID de EmailJS
  SERVICE_ID: 'YOUR_SERVICE_ID', // Tu Service ID (Gmail, Outlook, etc.)
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Tu Template ID
  
  // Email de destino
  TO_EMAIL: 'emstudios.col@gmail.com',
  
  // Configuraciones
  isConfigured: function() {
    return this.USER_ID !== 'YOUR_USER_ID' && 
           this.SERVICE_ID !== 'YOUR_SERVICE_ID' && 
           this.TEMPLATE_ID !== 'YOUR_TEMPLATE_ID';
  }
};

// Template para email cuando EmailJS no está configurado
export const createEmailBody = (data) => {
  return `
Asunto: Nueva consulta desde EM STUDIOS - ${data.empresa}

Estimado equipo de EM STUDIOS,

He recibido una nueva consulta desde el formulario de contacto de la landing page:

INFORMACIÓN DEL CLIENTE:
------------------------
Nombre: ${data.nombre}
Email: ${data.email}
Empresa: ${data.empresa}
Teléfono: ${data.telefono || 'No proporcionado'}
Número de empleados: ${data.empleados || 'No especificado'}

MENSAJE:
--------
${data.mensaje || 'Sin mensaje adicional'}

FECHA: ${new Date().toLocaleString('es-CO')}

Por favor, contacta al cliente lo antes posible.

---
Este mensaje fue enviado desde la landing page de EM STUDIOS
`.trim();
};

// Función de fallback usando mailto
export const sendEmailFallback = (data) => {
  const subject = encodeURIComponent(`Nueva consulta desde EM STUDIOS - ${data.empresa}`);
  const body = encodeURIComponent(createEmailBody(data));
  const mailtoLink = `mailto:${emailConfig.TO_EMAIL}?subject=${subject}&body=${body}`;
  
  window.open(mailtoLink, '_blank');
  return true;
}; 