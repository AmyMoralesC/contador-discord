# Discord Counter - Frontend

Dashboard en vivo para un contador de Discord con estadísticas, promesas y ranking de errores.

## 🚀 Estructura del Proyecto

```
src/
├── features/           # Features independientes (contador, stats, dashboard)
├── shared/            # Componentes y utilidades compartidas
├── App.tsx            # Componente raíz
└── main.tsx           # Entry point
```

## 🔧 Setup

1. **Variables de entorno**: Crea un `.env.local`:
```
VITE_API_URL=http://localhost:3001
```

2. **Instalar dependencias**:
```bash
pnpm install
```

3. **Desarrollar**:
```bash
pnpm run dev
```

4. **Build para producción**:
```bash
pnpm run build
```

## 📦 Dependencias Principales

- **React 18** - UI Framework
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **TanStack Query** - Server state management
- **Zustand** - Global state management

## 🎯 Git Workflow

```bash
# Crear rama feature
git checkout -b feature/nombre-feature

# Hacer commits
git commit -m "feat: descripción del cambio"

# Pushear
git push origin feature/nombre-feature

# Crear Pull Request en GitHub
```

## 📝 Commit Convention

```
feat: nueva funcionalidad
fix: arreglar bug
config: cambios de configuración
refactor: refactorización de código
docs: cambios en documentación
style: cambios de estilo (no lógica)
```

## 🔗 API Endpoints Esperados

Tu amigo debe crear estos endpoints:

- `GET /api/contador` - Número actual, días sin arruinar, último usuario
- `GET /api/estadisticas` - Top contadores, top caqueados, promesas
- `GET /api/promesas` - Lista de promesas
- `GET /api/errores` - Lista de errores

## 📱 Responsive Design

- ✅ Desktop (1400px+)
- ⏳ Tablet (768px - 1024px) - Por implementar
- ⏳ Mobile (< 768px) - Por implementar
