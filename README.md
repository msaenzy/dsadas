# Spondylus Soluciones Digitales - Standalone Vite + React + TypeScript

Este repositorio contiene la versión **standalone 100% idéntica** del proyecto **Spondylus Soluciones Digitales**, configurada y optimizada para ejecutarse localmente con Vite + React + TypeScript y desplegarse directamente en **GitHub Pages**.

---

## 📁 Estructura del Proyecto

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Workflow de GitHub Actions para despliegue automático
├── public/
│   └── logo.svg              # Favicon / Logo vectorial
├── src/
│   ├── components/           # Componentes modulares de la interfaz
│   │   ├── pages/            # Páginas ampliadas (Nosotros, Planes, Casos, Contacto)
│   │   ├── CaseShowcaseGallery.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── PlansSection.tsx
│   │   ├── ProcessPathSection.tsx
│   │   ├── SimulatorSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ValueSection.tsx
│   ├── App.tsx               # Componente principal con lógica de estado y temas
│   ├── index.css             # Estilos globales y Tailwind CSS
│   ├── main.tsx              # Punto de entrada de React
│   └── types.ts              # Definiciones de tipos de TypeScript
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts            # Configuración de Vite con base path relativo ('./')
```

---

## 🚀 Desarrollo Local

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo local:
   ```bash
   npm run dev
   ```

3. Abrir el navegador en `http://localhost:3000` (o la dirección que muestre Vite).

---

## 📦 Construcción del Proyecto (Build)

Para compilar el proyecto a código de producción optimizado en la carpeta `dist/`:

```bash
npm run build
```

---

## 🌐 Despliegue en GitHub Pages

### Método 1: GitHub Actions (Recomendado)

El workflow en `.github/workflows/deploy.yml` compila el proyecto y lo despliega automáticamente.

> ⚠️ **IMPORTANTE para evitar el error "deploy failure":**
> 1. En tu repositorio de GitHub, ve a **Settings** > **Pages**.
> 2. En **Build and deployment** -> **Source**, asegúrate de cambiar de *"Deploy from a branch"* a **"GitHub Actions"**.
> 3. Si no cambias la opción "Source" a "GitHub Actions", el workflow fallará con error de permisos al intentar desplegar.
> 4. Vuelve a la pestaña **Actions** > **Deploy Static Site to GitHub Pages** > **Run workflow**.

---

### Método 2: Despliegue Directo desde la carpeta `/docs`

Como el comando `npm run build` genera la versión estática directamente en la carpeta `/docs`:

1. En tu repositorio de GitHub, ve a **Settings** > **Pages**.
2. En **Source**, selecciona **Deploy from a branch**.
3. En **Branch**, selecciona **`main`** y en la carpeta elige **`/docs`**.
4. Haz clic en **Save**. En 1 o 2 minutos tu sitio estará en línea sin pantalla blanca.

---

## 🛠️ Tecnologías Utilizadas

- **React 19**
- **TypeScript**
- **Vite 6**
- **Tailwind CSS 4**
- **Motion (Framer Motion)**
- **Lucide React Icons**
