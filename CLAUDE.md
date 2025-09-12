# Project: **Qolect Travel – Landing Frontend**

## Core Principles
**IMPORTANT**: Todo el código debe seguir principios **SOLID**, accesibilidad (WCAG AA), y performance (Core Web Vitals). Si algo los viola, se deberá refactorizar.

---

## Development Workflow
1. Antes de cualquier cambio, **crea y haz checkout** a una rama: `feature-[descripcion-corta]` (o `fix-...`, `chore-...`).
2. Escribe **tests** para toda nueva funcionalidad o regresión cubierta.
3. Ejecuta **typecheck, lint, build y tests** localmente.
4. Commits con **Conventional Commits** y mensaje claro del "qué" y "por qué".
5. **Solo realiza `git push` si TODOS los checks pasan**. Si falla algo, **no** hagas push.

---

## Architecture Overview
- **Frontend**: Next.js 15 (App Router) + TypeScript  
- **Estilos**: **CSS nativo** con variables, glassmorphism, gradientes, scroll-driven animations (sin librerías pesadas)  
- **Estado**:  
  - Client state mínimo con React (y **Zustand** si la complejidad lo requiere)  
  - Server state con **React Query** cuando exista API real  
- **Internacionalización**: preparada para ES/EN (estructura lista, no bloquear MVP)  
- **Rutas**: `/app` (SSR/ISR según página)  
- **Assets**: `/public/images` optimizadas y con `alt` descriptivo  
- **Testing**:  
  - **Vitest/Jest** (unit/integration)  
  - **Playwright** (E2E básicos de navegación y render crítico)  
- **Accesibilidad**: `prefers-reduced-motion`, contraste suficiente, semántica HTML estricta  

---

## Code Standards
- TypeScript **estricto** en todo nuevo código.  
- Componentes en `/app` y `/components` con separación de responsabilidades (UI vs lógica).  
- Evitar dependencias de UI innecesarias; priorizar **CSS nativo** y utilidades propias.  
- Patrón de componentes: pequeños, puros, props tipadas, sin side-effects.  
- SEO básico: `metadata` en layout, etiquetas meta por página, uso correcto de headings.  
- Imágenes optimizadas, lazy donde aplique.  

---

## Quality Gates
- **`npm run typecheck`** sin errores.  
- **ESLint + Prettier** sin warnings/errores.  
- **`npm run build`** debe completar sin errores.  
- **Tests** unitarios e E2E deben **pasar 100%**.  
- **Cobertura mínima 80%** en unit/integration (lines/branches).  

---

## File Organization
```
/app
  layout.tsx
  page.tsx
  globals.css
  /(routes)...
/components
  [Feature]/
    ComponentName.tsx
/lib
  utils/
  hooks/
  config/
/public
  /images
/tests
  unit/
  e2e/
```
- **Componentes**: `/components/[Feature]/[Component].tsx`  
- **Estilos globales**: `/app/globals.css` (tokens en `:root`)  
- **Utilidades**: `/lib/utils/*`  
- **Tipos**: en los mismos módulos o `/lib/types/*` si son compartidos  

---

## Git & Commits
- **Ramas**: `feature/...`, `fix/...`, `chore/...`  
- **Conventional Commits**:
  - `feat(scope): add hero section with animated blobs`
  - `fix(styles): safari clip-path visual glitch`
  - `chore(config): add playwright e2e setup`  
- **Pull Requests**: incluir contexto, screenshots/GIF y checklist de checks verdes.  

---

## Local Commands (deben existir en `package.json`)
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --ext .ts,.tsx --max-warnings=0",
    "format": "prettier --check .",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:e2e": "playwright test",
    "check:all": "npm run lint && npm run format && npm run typecheck && npm run build && npm run test && npm run test:e2e"
  }
}
```