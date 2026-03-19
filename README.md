# Blog/Article REST API

Jednoduchý REST API projekt postavený na Node.js a Express pro správu článků.

## Technologie

- **Node.js** - Runtime
- **Express** - Web framework
- **SQLite** - Databáze
- **dotenv** - Správa env proměnných

## Struktura projektu

```
├── server.js                    # Hlavní entry point aplikace
├── package.json               # Závislosti a skripty
├── Dockerfile                 # Dockerfile pro containerizaci
├── .gitignore
├── .env.example               # Příklad env proměnných
└── src/
    ├── db.js                  # Databázové připojení a utility
    ├── routes/
    │   └── articles.js        # API routy
    ├── models/
    │   └── Article.js         # Data modely
    └── controllers/
        └── articlesController.js  # Business logika
```

## Instalace

```bash
# Naklonuj projekt
git clone <repo-url>
cd blog-api

# Nainstaluj závislostí
npm install

# Vytvoř .env soubor (optional)
cp .env.example .env
```

## Spuštění

```bash
# Vývojový mód (auto-reload)
npm run dev

# Produkční mód
npm start
```

Server poběží na `http://localhost:3000`

## API Endpoints

### GET /api/articles
Vrátí všechny články

```bash
curl http://localhost:3000/api/articles
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "My First Article",
      "content": "Article content...",
      "author": "John Doe",
      "created_at": "2024-01-15 10:30:00",
      "updated_at": "2024-01-15 10:30:00"
    }
  ],
  "count": 1
}
```

### GET /api/articles/:id
Vrátí článek podle ID

```bash
curl http://localhost:3000/api/articles/1
```

### POST /api/articles
Vytvoří nový článek

```bash
curl -X POST http://localhost:3000/api/articles \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Article",
    "content": "Article content here...",
    "author": "John Doe"
  }'
```

### PUT /api/articles/:id
Aktualizuje existující článek

```bash
curl -X PUT http://localhost:3000/api/articles/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Title",
    "content": "Updated content...",
    "author": "Jane Doe"
  }'
```

### DELETE /api/articles/:id
Smaže článek

```bash
curl -X DELETE http://localhost:3000/api/articles/1
```

### GET /api/health
Health check endpoint

```bash
curl http://localhost:3000/api/health
```

## Docker support

```bash
# Vytvoř image
docker build -t blog-api .

# Spusť container
docker run -p 3000:3000 blog-api

# Server bude dostupný na http://localhost:3000
```

## Licence

MIT
