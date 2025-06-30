# 🚀 Guía de Deployment - EM STUDIOS Landing

## ⚡ Deploy Rápido (Recomendado)

### **Opción 1: Vercel (5 minutos)**
```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Deploy directo
vercel

# 3. Seguir pasos del CLI
# - Link to existing project? No
# - Project name: em-studios-landing
# - Directory: ./
# - Override settings? No

# 4. Deploy automático en cada push
vercel --prod
```

### **Opción 2: Netlify (5 minutos)**
```bash
# 1. Build local
npm run build

# 2. Arrastrar carpeta 'dist' a netlify.com
# O usar CLI:
npm install -g netlify-cli
netlify deploy --dir=dist --prod
```

### **Opción 3: GitHub Pages**
1. Subir código a GitHub
2. Ir a Settings > Pages
3. Source: GitHub Actions
4. El workflow ya está configurado en `.github/workflows/deploy.yml`

## 🔧 Pre-deployment Checklist

- [ ] ✅ Build funciona: `npm run build`
- [ ] ✅ Preview local: `npm run preview`
- [ ] ✅ Imágenes optimizadas
- [ ] ✅ SEO configurado
- [ ] ✅ Analytics (opcional)
- [ ] ✅ Dominio personalizado (opcional)

## 🌐 Configuración de Dominio

### **Dominio Personalizado en Vercel:**
1. Ir a project dashboard
2. Settings > Domains
3. Agregar tu dominio: `em-studios.com.co`
4. Configurar DNS:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.19.61
   ```

### **SSL Certificate:**
Se configura automáticamente en Vercel/Netlify

## 📊 Analytics (Opcional)

### **Google Analytics 4:**
1. Crear propiedad en Google Analytics
2. Obtener Measurement ID
3. Agregar a `Layout.astro`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔍 Monitoreo

### **Performance:**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

### **SEO:**
- [Google Search Console](https://search.google.com/search-console)
- Sitemap: `https://tu-dominio.com/sitemap-index.xml`

## 📱 URLs Finales

### **Desarrollo:**
- Local: `http://localhost:4322`
- Preview: `npm run preview`

### **Producción:**
- Vercel: `https://em-studios-landing.vercel.app`
- Dominio: `https://em-studios.com.co` (cuando configures)

## 🛠️ Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Preview local del build
npm run preview

# Deploy directo a Vercel
vercel --prod

# Verificar build
npm run check
```

## 🔄 Actualizaciones Futuras

1. Hacer cambios en código
2. Push a GitHub
3. Deploy automático
4. Verificar en producción

## 🆘 Solución de Problemas

### **Build Fails:**
```bash
# Limpiar node_modules
rm -rf node_modules package-lock.json
npm install
npm run build
```

### **Imágenes no cargan:**
- Verificar que estén en `/public/`
- Usar rutas absolutas: `/imagen.png`

### **Estilos rotos:**
- Verificar que Tailwind esté compilando
- Revisar configuración en `tailwind.config.mjs`

---

**¡Tu landing está lista para conquistar el mundo! 🌍✨** 