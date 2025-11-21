# Despliegue de QOLECT Landing Page en Vercel

## 🚀 Pasos para Desplegar

### Opción 1: Desde la CLI de Vercel (Recomendado)

1. **Instalar Vercel CLI** (si no lo tienes):
```bash
npm install -g vercel
```

2. **Login en Vercel**:
```bash
vercel login
```

3. **Desplegar**:
```bash
cd c:\Users\Darka\Documents\MyStuff\QOLECT\QOLECT-Landing
vercel
```

4. **Seguir las instrucciones**:
   - ¿Configurar y desplegar "~/QOLECT/QOLECT-Landing"? → **Y**
   - ¿Qué scope? → Selecciona tu cuenta/organización
   - ¿Link a proyecto existente? → **N** (primera vez) o **Y** (si ya existe)
   - ¿Cuál es el nombre del proyecto? → **qolect-landing** (o el que prefieras)
   - ¿En qué directorio está tu código? → **./** (presiona Enter)
   - ¿Detectar configuración automática? → **Y**
   - ¿Sobrescribir configuración? → **N** (usa la detectada automáticamente)

5. **Desplegar a producción**:
```bash
vercel --prod
```

---

### Opción 2: Desde Vercel Dashboard

#### A. Conectar el repositorio

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Haz clic en **"Add New Project"**
3. Selecciona **"Import Git Repository"**
4. Conecta tu cuenta de GitHub si no lo has hecho
5. Busca y selecciona el repositorio: **`QOLECT-Landing`** (o `Invbu1414/QOLECT-Landing` si está en GitHub)
6. Haz clic en **"Import"**

#### B. Configurar el proyecto

**Framework Preset:** Next.js (detectado automáticamente)

**Root Directory:** `./` (dejar en blanco o usar `.`)

**Build Command:** `npm run build` (ya detectado automáticamente)

**Output Directory:** `.next` (ya detectado automáticamente)

**Install Command:** `npm install` (ya detectado automáticamente)

#### C. Variables de Entorno (si las necesitas)

Si tu landing page consume la API, agrega las siguientes variables de entorno:

1. En la sección **"Environment Variables"**, agrega:

```
NEXT_PUBLIC_API_URL = https://qolect-api-production-n5s6275oaa-uc.a.run.app
```

*(Nota: Las variables que comiencen con `NEXT_PUBLIC_` estarán disponibles en el cliente)*

#### D. Desplegar

1. Haz clic en **"Deploy"**
2. Espera a que termine la build (~2-3 minutos)
3. Tu landing page estará disponible en: `https://qolect-landing-[hash].vercel.app`

---

## 🔄 Despliegues Automáticos

Vercel detectará automáticamente pushes a tu repositorio:
- **Push a `main` o `production`** → Despliegue a producción
- **Push a otras ramas** → Preview deployments

### Configurar rama de producción (opcional)

Si quieres que otra rama (ej: `production`) sea la de producción:

1. Ve a **Project Settings** → **Git**
2. En **"Production Branch"**, cambia a `production`
3. Guarda cambios

---

## 📋 Checklist Post-Despliegue

- [ ] Verificar que el sitio carga correctamente
- [ ] Probar navegación entre secciones
- [ ] Verificar que las imágenes de Supabase se cargan
- [ ] Probar formulario de contacto (si existe)
- [ ] Verificar que los datos de experiencias y noticias se cargan desde la API
- [ ] Probar en móvil (responsive)
- [ ] Configurar dominio personalizado (ej: `www.qolect.com`)

---

## 🌐 Dominio Personalizado

### Agregar dominio propio

1. Ve a **Project Settings** → **Domains**
2. Haz clic en **"Add"**
3. Ingresa tu dominio (ej: `qolect.com` o `www.qolect.com`)
4. Sigue las instrucciones para configurar DNS:

**Opción A: Si usas Vercel Nameservers (recomendado)**
- Cambia los nameservers de tu dominio a los de Vercel
- Vercel gestionará automáticamente SSL y DNS

**Opción B: Si usas tu propio DNS**
- Agrega un registro `A` apuntando a la IP de Vercel
- Agrega un registro `CNAME` para `www` apuntando a `cname.vercel-dns.com`

5. Espera la verificación (~5-10 minutos)
6. SSL se configurará automáticamente (Let's Encrypt)

---

## 🔧 Configuración Avanzada

### Redirecciones (opcional)

Si quieres redirigir `qolect.com` → `www.qolect.com`, agrega en `vercel.json`:

\`\`\`json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "qolect.com"
        }
      ],
      "destination": "https://www.qolect.com/:path*",
      "permanent": true
    }
  ]
}
\`\`\`

### Headers de Seguridad

Agregar en `vercel.json`:

\`\`\`json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
\`\`\`

---

## 🐛 Troubleshooting

### Error: "Build failed"

**Solución:**
1. Verifica que `npm run build` funcione localmente
2. Revisa los logs de Vercel para ver el error específico
3. Asegúrate de que todas las dependencias estén en `package.json`

### Error: "Module not found"

**Solución:**
1. Verifica que el import sea correcto (case-sensitive en Vercel)
2. Ejemplo: `import Component from './Component'` (no `'./component'`)

### Imágenes no se cargan

**Solución:**
1. Verifica que `remotePatterns` en `next.config.mjs` incluya los dominios correctos:
   - `msnqkbkcljxnwjemdgqp.supabase.co` (Supabase)
   - `images.unsplash.com` (si usas Unsplash)

### Datos de la API no se cargan

**Solución:**
1. Verifica que `NEXT_PUBLIC_API_URL` esté configurada en Vercel
2. Revisa que la API permita requests desde el dominio de Vercel (CORS)
3. Agrega el dominio de Vercel a `ALLOWED_ORIGINS` en `env.yaml` de la API:
   \`\`\`yaml
   ALLOWED_ORIGINS: '["https://qolect-landing.vercel.app","*"]'
   \`\`\`

---

## 📊 Monitoreo

### Analytics de Vercel

Vercel ofrece analytics gratuitos:
- Visitas por página
- Países de origen
- Tiempo de carga
- Core Web Vitals

Actívalos en: **Project Settings** → **Analytics**

### Speed Insights

Para medir performance:
1. Instala el paquete:
```bash
npm install @vercel/speed-insights
```

2. Agrega a `app/layout.tsx`:
```tsx
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
```

---

## 🔄 Comandos Útiles

```bash
# Ver logs del deployment
vercel logs

# Ver lista de deployments
vercel ls

# Eliminar deployment (preview)
vercel rm <deployment-url>

# Ver información del proyecto
vercel inspect

# Desplegar a preview (rama actual)
vercel

# Desplegar a producción
vercel --prod

# Ver variables de entorno
vercel env ls
```

---

## 📞 Soporte

- Documentación de Vercel: https://vercel.com/docs
- Comunidad de Vercel: https://github.com/vercel/vercel/discussions
- Next.js Deployment: https://nextjs.org/docs/deployment

---

**Última actualización:** 20 de noviembre de 2025  
**Proyecto:** QOLECT Landing Page  
**Framework:** Next.js 15
