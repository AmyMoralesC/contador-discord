# Discord Counter Bot - Backend Requirements

Documentación técnica de los requisitos del backend para el bot de Discord.

## 📋 Endpoints Requeridos

El frontend espera los siguientes 4 endpoints REST en la API del bot:

### 1. `GET /api/contador`

Retorna el estado actual del contador.

**Response:**
```json
{
  "numero": 261,
  "diasSinArruinar": 10,
  "ultimoUsuario": {
    "nombre": "Aryx",
    "id": "123456789"
  }
}
```

**Campos:**
- `numero` (number): El número actual del contador
- `diasSinArruinar` (number): Días desde el último error (se resetea a 0 cuando hay un error)
- `ultimoUsuario.nombre` (string): Nombre del usuario que contó último
- `ultimoUsuario.id` (string): ID del usuario en Discord

---

### 2. `GET /api/estadisticas`

Retorna los rankings y promesas activas.

**Response:**
```json
{
  "topContadores": [
    { "id": "user1", "nombre": "Juan Carlos", "contador": 234 },
    { "id": "user2", "nombre": "Aryx", "contador": 187 },
    { "id": "user3", "nombre": "María F.", "contador": 156 },
    { "id": "user4", "nombre": "Carlos R.", "contador": 142 },
    { "id": "user5", "nombre": "Ana López", "contador": 128 }
  ],
  "topCaqueados": [
    { "id": "err1", "usuarioId": "u1", "usuarioNombre": "Luis M.", "cantidad": 12 },
    { "id": "err2", "usuarioId": "u2", "usuarioNombre": "Juan S.", "cantidad": 8 },
    { "id": "err3", "usuarioId": "u3", "usuarioNombre": "Rosa M.", "cantidad": 5 },
    { "id": "err4", "usuarioId": "u4", "usuarioNombre": "Pedro G.", "cantidad": 3 },
    { "id": "err5", "usuarioId": "u5", "usuarioNombre": "Sofia L.", "cantidad": 2 }
  ],
  "promesas": [
    {
      "id": "prom1",
      "usuarioId": "user1",
      "usuarioNombre": "Juan Carlos",
      "promesa": "Llegar a 500",
      "numeroObjetivo": 500,
      "numeroActual": 261
    },
    {
      "id": "prom2",
      "usuarioId": "user2",
      "usuarioNombre": "Aryx",
      "promesa": "Llegar a 1000",
      "numeroObjetivo": 1000,
      "numeroActual": 261
    },
    {
      "id": "prom3",
      "usuarioId": "user3",
      "usuarioNombre": "María F.",
      "promesa": "Llegar a 750",
      "numeroObjetivo": 750,
      "numeroActual": 261
    }
  ]
}
```

**Requisitos:**
- `topContadores`: Top 5 usuarios con más números contados (descendente)
- `topCaqueados`: Top 5 usuarios con más errores (descendente)
- `promesas`: Máximo 3 promesas activas con su progreso actual

---

### 3. `GET /api/promesas`

Retorna solo las promesas activas (endpoint opcional si se requiere separadamente).

**Response:**
```json
[
  {
    "id": "prom1",
    "usuarioId": "user1",
    "usuarioNombre": "Juan Carlos",
    "promesa": "Llegar a 500",
    "numeroObjetivo": 500,
    "numeroActual": 261
  }
]
```

---

### 4. `GET /api/errores`

Retorna solo los errores/caídas (endpoint opcional si se requiere separadamente).

**Response:**
```json
[
  {
    "id": "err1",
    "usuarioId": "u1",
    "usuarioNombre": "Luis M.",
    "cantidad": 12
  }
]
```

---

## 🤖 Reglas de Validación del Bot

El bot debe procesar mensajes en el canal de contar según las siguientes reglas:

### ✅ Casos Válidos (Acepta)

1. **Número puro**: `262` 
2. **Número con texto adicional**: `262, sí, lo vi jajajaj`
3. **Número en forma textual**: `docientos sesenta y dos`
4. **Múltiples números en serie**: Múltiples mensajes con números consecutivos
5. **Mensajes editados**: Valida el mensaje después de que sea editado (con delay)

### ❌ Casos Inválidos (Rechaza)

1. **Palabra o emoji sin número**: `hola`, `😊` → Incrementa contador de errores
2. **Número incorrecto**: Escribe `263` cuando debería ser `262` → Incrementa contador de errores
3. **Formato ambiguo**: Mensaje que no claramente contiene un número

### ⏱️ Comportamiento Temporal

- **Cooldown entre contadores**: Aproximadamente 26 segundos entre mensajes válidos
- **Ventana de edición**: Esperar ~5 segundos antes de validar un mensaje (permite al usuario editar si se equivoca)
- **Reseteo de "Días sin arruinar"**: Se reinicia a 0 cuando ocurre cualquier error
- **Incremento de "Días sin arruinar"**: Se incrementa cada número válido contado

### 📊 Ordenamiento de Datos

- **topContadores**: Descendente por cantidad de números contados
- **topCaqueados**: Descendente por cantidad de errores
- **promesas**: Ordenadas por fecha de creación (más recientes primero)

---

## 🔌 Configuración de Conexión

### Frontend

El frontend se conecta a la API mediante:

```env
VITE_API_URL=http://localhost:3001
```

**Nota**: Ajustar el puerto según la configuración del bot.

### CORS

La API debe permitir CORS desde el dominio del frontend:

```
Access-Control-Allow-Origin: * (o especificar dominio)
Content-Type: application/json
```

---

## 📦 Estructura Recomendada del Proyecto Bot

```
bot/
├── src/
│   ├── commands/        # Comandos del bot
│   ├── events/          # Event handlers de Discord
│   ├── services/        # Lógica de negocio (validación, contador)
│   ├── database/        # Capa de persistencia de datos
│   ├── api/             # Rutas y endpoints REST
│   └── index.ts         # Punto de entrada principal
├── .env                 # Variables de entorno
├── .env.example         # Template de variables
├── package.json
└── README.md
```

---

## 🚀 Checklist de Implementación

- [ ] Crear servidor HTTP (Express, Fastify, etc.)
- [ ] Implementar los 4 endpoints (`/api/contador`, `/api/estadisticas`, `/api/promesas`, `/api/errores`)
- [ ] Crear lógica de validación del contador
- [ ] Implementar persistencia de datos (base de datos o archivo JSON)
- [ ] Configurar CORS para permitir requests del frontend
- [ ] Implementar delay de 5 segundos para validar ediciones
- [ ] Testear conectividad con el frontend
- [ ] Documentar variables de entorno necesarias

---

## 📝 Variables de Entorno Sugeridas

```env
DISCORD_TOKEN=your_bot_token_here
DISCORD_CHANNEL_ID=channel_id_for_counting
API_PORT=3001
API_HOST=localhost
DATABASE_URL=your_db_connection_string
NODE_ENV=development
```

---

## 🔗 Integración con Frontend

Una vez que los endpoints estén listos:

1. Configurar `VITE_API_URL` en el frontend con la URL del bot
2. Cambiar `VITE_USE_MOCK_DATA=false` para usar datos reales
3. Probar que los datos se muestren correctamente en el dashboard

---

## ❓ Especificaciones Adicionales

**Tipo de dato para ID de usuario**: String (formato Discord snowflake recomendado)

**Formato de promesas**: Máximo 3 activas. Si hay más, devolver las más recientes o las con mayor progreso.

**Rango de números**: El contador no tiene límite máximo.

**Persistencia**: Los datos deben persistir entre reinicios del bot.

---

**Última actualización**: Mayo 2026  
**Versión**: 1.0
