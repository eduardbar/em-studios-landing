# 📧 Configuración de EmailJS para EM STUDIOS

Esta guía te ayudará a configurar EmailJS para que el formulario de contacto envíe emails directamente sin necesidad de backend.

## 🚀 **¿Qué es EmailJS?**

EmailJS permite enviar emails directamente desde el frontend usando JavaScript. Es **gratuito hasta 200 emails/mes** y perfecto para formularios de contacto.

---

## 📝 **Paso 1: Crear cuenta en EmailJS**

1. Ve a [EmailJS.com](https://www.emailjs.com/)
2. Haz clic en **"Sign Up"**
3. Regístrate con tu email (recomendado: usar emstudios.col@gmail.com)
4. Confirma tu email

---

## ⚙️ **Paso 2: Configurar servicio de email**

### **Opción A: Gmail (Recomendado)**

1. En el dashboard de EmailJS, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona **"Gmail"**
4. Configura:
   - **Service ID:** `gmail_service` (puedes cambiarlo)
   - **User Email:** `emstudios.col@gmail.com`
5. Haz clic en **"Create Service"**
6. Sigue las instrucciones para autorizar Gmail

### **Opción B: Outlook/Hotmail**

1. Selecciona **"Outlook"** en lugar de Gmail
2. Configura con tu email de Outlook
3. Autoriza la conexión

---

## 📄 **Paso 3: Crear template de email**

1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Configura:
   - **Template Name:** `em_studios_contact`
   - **Template ID:** `template_contact` (o personalízalo)

### **Configuración del template:**

**Subject (Asunto):**
```
Nueva consulta desde EM STUDIOS - {{empresa}}
```

**Content (Contenido):**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Nueva Consulta EM STUDIOS</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: #1e3a8a; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .info-block { background: #f8f9fa; padding: 15px; margin: 10px 0; border-left: 4px solid #3b82f6; }
        .label { font-weight: bold; color: #1e3a8a; }
    </style>
</head>
<body>
    <div class="header">
        <h2>🚀 Nueva Consulta - EM STUDIOS</h2>
    </div>
    
    <div class="content">
        <p>Se ha recibido una nueva consulta desde la landing page de EM STUDIOS:</p>
        
        <div class="info-block">
            <p><span class="label">Nombre:</span> {{from_name}}</p>
            <p><span class="label">Email:</span> {{from_email}}</p>
            <p><span class="label">Empresa:</span> {{empresa}}</p>
            <p><span class="label">Teléfono:</span> {{telefono}}</p>
            <p><span class="label">Empleados:</span> {{empleados}}</p>
        </div>
        
        <div class="info-block">
            <p><span class="label">Mensaje:</span></p>
            <p>{{message}}</p>
        </div>
        
        <p><strong>⏰ Fecha:</strong> {{fecha}}</p>
        
        <hr>
        <p style="color: #666; font-size: 12px;">
            Este mensaje fue enviado desde el formulario de contacto de EM STUDIOS<br>
            <strong>Responder a:</strong> {{reply_to}}
        </p>
    </div>
</body>
</html>
```

4. Haz clic en **"Save"**

---

## 🔧 **Paso 4: Obtener credenciales**

### **User ID:**
1. Ve a **"Account"** → **"General"**
2. Copia tu **"User ID"** (ejemplo: `user_aBc123DeF`)

### **Service ID:**
1. Ve a **"Email Services"**
2. Copia el **"Service ID"** del servicio que creaste (ejemplo: `gmail_service`)

### **Template ID:**
1. Ve a **"Email Templates"**
2. Copia el **"Template ID"** del template que creaste (ejemplo: `template_contact`)

---

## ⚡ **Paso 5: Actualizar configuración en el proyecto**

Edita el archivo `src/utils/emailConfig.js`:

```javascript
export const emailConfig = {
  // Reemplaza con tus credenciales reales
  USER_ID: 'user_aBc123DeF',        // Tu User ID
  SERVICE_ID: 'gmail_service',       // Tu Service ID
  TEMPLATE_ID: 'template_contact',   // Tu Template ID
  
  // Email de destino (no cambiar)
  TO_EMAIL: 'emstudios.col@gmail.com',
  
  // ... resto del código
};
```

---

## 🧪 **Paso 6: Probar el formulario**

1. Guarda los cambios
2. Reinicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Ve a la sección de contacto en `localhost:4321`
4. Llena el formulario con datos de prueba
5. Envía el formulario
6. Verifica que llegue el email a `emstudios.col@gmail.com`

---

## 🔒 **Configuración de seguridad (Recomendado)**

### **Restricciones de dominio:**
1. En EmailJS, ve a **"Account"** → **"Security"**
2. Agrega estos dominios permitidos:
   - `localhost` (para desarrollo)
   - `landing-tau-ashy-31.vercel.app` (tu dominio actual)
   - Tu dominio personalizado (si lo tienes)

### **Límite de rate:**
- Configura máximo 10 emails por hora para evitar spam

---

## 🚨 **Fallback automático**

Si EmailJS no está configurado o falla, el formulario automáticamente:

1. **Usa mailto:** Abre el cliente de email del usuario
2. **Pre-completa:** Subject y body con todos los datos
3. **Permite envío manual:** El usuario solo hace clic en "Enviar"

---

## 📊 **Plan gratuito de EmailJS:**

- ✅ **200 emails/mes gratis**
- ✅ **Templates ilimitados**
- ✅ **Servicios ilimitados**
- ✅ **Soporte básico**

Para mayor volumen, considera el **plan Personal ($15/mes)** con 1,000 emails.

---

## 🆘 **Solución de problemas**

### **Error: "Service not found"**
- Verifica que el `SERVICE_ID` sea correcto
- Asegúrate de que el servicio esté activo en EmailJS

### **Error: "Template not found"**
- Verifica que el `TEMPLATE_ID` sea correcto
- Asegúrate de que el template esté guardado

### **No llegan emails:**
- Revisa la carpeta de spam/basura
- Verifica que el email de destino sea correcto
- Chequea los logs en el dashboard de EmailJS

### **Error de CORS:**
- Agrega tu dominio en las configuraciones de seguridad de EmailJS

---

## 🎯 **Template variables disponibles**

En tu template de EmailJS puedes usar estas variables:

- `{{from_name}}` - Nombre del cliente
- `{{from_email}}` - Email del cliente  
- `{{empresa}}` - Nombre de la empresa
- `{{telefono}}` - Teléfono (o "No proporcionado")
- `{{empleados}}` - Rango de empleados (o "No especificado")
- `{{message}}` - Mensaje del cliente (o "Sin mensaje adicional")
- `{{to_email}}` - Email de destino (emstudios.col@gmail.com)
- `{{reply_to}}` - Email para responder (mismo que from_email)

---

**✅ Una vez configurado, ¡tu formulario enviará emails automáticamente!**

Si tienes problemas, el sistema automáticamente usará `mailto:` como respaldo. 