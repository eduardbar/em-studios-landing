# 🚀 EM STUDIOS - Landing Page de Automatización Empresarial

Una landing page moderna y elegante para EM STUDIOS, empresa especializada en automatización empresarial y desarrollo de software de automatización de procesos.

## 🎯 Características Principales

### ✨ Diseño Moderno y Responsive
- **100% Responsive**: Diseño adaptado para desktop, tablet y móvil
- **Animaciones Suaves**: Micro-interacciones que mejoran la experiencia de usuario
- **Gradientes Modernos**: Paleta de colores profesional con azules y grises empresariales
- **Tipografía Optimizada**: Fuentes Google Fonts (Inter + Poppins) para máxima legibilidad

### 🎯 SEO Optimizado para Colombia
- **Meta Tags Completos**: Title, description, keywords optimizados en español
- **Open Graph**: Preparado para compartir en redes sociales
- **Schema Markup**: Datos estructurados para mejor indexación
- **Sitemap Automático**: Generado automáticamente por Astro
- **URLs Limpias**: Estructura de URLs amigable para SEO

### 📱 Secciones de Conversión

#### 🏠 Hero Section
- Titular principal con propuesta de valor clara
- Subtítulo explicativo del servicio
- CTA principal destacado (Demo Gratuita)
- Dashboard mockup interactivo
- Indicadores de confianza

#### 🛠️ Servicios
- 6 servicios principales de automatización:
  - Automatización de Procesos de Negocio
  - Gestión Documental Automatizada
  - Automatización Financiera y Contable
  - Automatización de Recursos Humanos
  - Inventario y Logística
  - Atención al Cliente Automatizada

#### 💬 Testimonios
- Testimonios reales de clientes
- Sistema de valoración por estrellas
- Caso de éxito destacado con métricas
- Credibilidad y prueba social

#### 📞 Contacto y Demo
- Formulario de contacto optimizado para conversión
- Múltiples canales de contacto (Email, Teléfono, WhatsApp)
- Sección de preguntas frecuentes
- Garantía de respuesta en 2 horas

## 🛠️ Stack Tecnológico

- **Framework**: [Astro 4.0](https://astro.build/) - Framework moderno para sitios web rápidos
- **Styling**: [Tailwind CSS 3.3](https://tailwindcss.com/) - Framework CSS utility-first
- **Typography**: [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin) - Estilos tipográficos
- **Sitemap**: [@astrojs/sitemap](https://docs.astro.build/es/guides/integrations-guide/sitemap/) - Generación automática de sitemap
- **Fuentes**: Google Fonts (Inter + Poppins)

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ instalado
- npm o yarn como gestor de paquetes

### Instalación

```bash
# Clonar el repositorio (o usar los archivos creados)
cd em-studios-landing

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo en http://localhost:4321

# Producción
npm run build        # Construir para producción
npm run preview      # Vista previa de la build de producción

# Otros
npm run astro        # Comando Astro CLI
```

## 📊 Optimizaciones de Rendimiento

- **Astro Islands**: Hidratación selectiva de componentes
- **Zero JS by Default**: Solo JavaScript necesario se envía al cliente
- **Imágenes Optimizadas**: Formatos WebP y compresión automática
- **CSS Mínimo**: Solo estilos utilizados se incluyen en el build
- **Font Preloading**: Carga anticipada de fuentes críticas

## 🎨 Personalización

### Colores
Los colores están definidos en `tailwind.config.mjs`:

```js
colors: {
  primary: {
    // Azules corporativos de EM STUDIOS
    500: '#3b82f6',
    600: '#2563eb',
    // ... más variantes
  },
  secondary: {
    // Grises profesionales
    700: '#334155',
    900: '#0f172a',
    // ... más variantes
  }
}
```

### Tipografía
- **Heading**: Poppins (títulos y encabezados)
- **Body**: Inter (texto general)

### Animaciones
Animaciones personalizadas definidas en Tailwind:
- `animate-fade-in`: Aparición suave
- `animate-slide-up`: Deslizamiento hacia arriba
- `animate-bounce-subtle`: Rebote sutil

## 📝 Estructura de Archivos

```
src/
├── layouts/
│   └── Layout.astro          # Layout principal con SEO
├── components/
│   ├── Header.astro          # Navegación principal
│   ├── Hero.astro            # Sección hero principal
│   ├── Services.astro        # Servicios de automatización
│   ├── Testimonials.astro    # Testimonios y casos de éxito
│   ├── Contact.astro         # Formulario y contacto
│   └── Footer.astro          # Pie de página
├── pages/
│   └── index.astro           # Página principal
public/
├── favicon.svg               # Favicon de EM STUDIOS
└── ...                       # Otros assets estáticos
```

## 🎯 Palabras Clave SEO

La landing page está optimizada para estas palabras clave en español:

**Principales:**
- automatización empresarial
- software de automatización
- automatización de procesos
- desarrollo de software

**Long-tail:**
- automatización de procesos empresariales
- software de automatización de tareas
- optimización de procesos de negocio
- automatización financiera y contable

## 📞 Información de Contacto

La landing page incluye información de contacto placeholder que debe ser actualizada:

- **Email**: info@em-studios.com
- **Teléfono**: +57 XXX XXX XXXX
- **WhatsApp**: Enlace a configurar
- **Ubicación**: Colombia

## 🔧 Configuración de Producción

### Variables de Entorno
Crear archivo `.env` para configuraciones específicas:

```env
SITE_URL=https://em-studios.com
CONTACT_EMAIL=info@em-studios.com
ANALYTICS_ID=UA-XXXXXXXXX-X
```

### Deploy
Compatible con:
- **Vercel**: Deploy automático desde Git
- **Netlify**: Build command: `npm run build`, Publish directory: `dist/`
- **GitHub Pages**: Con Actions para build automático
- **Servidor VPS**: Build local y subida de carpeta `dist/`

## 📈 Métricas y Analytics

La estructura está preparada para:
- Google Analytics 4
- Facebook Pixel
- Google Tag Manager
- Hotjar/Microsoft Clarity

## 🤝 Contribución

Para mejorar la landing page:

1. Fork del proyecto
2. Crear rama feature (`git checkout -b feature/mejora`)
3. Commit cambios (`git commit -m 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Crear Pull Request

## 📄 Licencia

Este proyecto está bajo licencia MIT. Ver `LICENSE` para más detalles.

---

**EM STUDIOS** - Automatización Empresarial que Multiplica tu Productividad 🚀

*Creado con ❤️ usando Astro + Tailwind CSS* 