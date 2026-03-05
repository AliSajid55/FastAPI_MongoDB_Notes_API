# FastAPI MongoDB Notes API & Next.js Dashboard

A full-stack notes application featuring a FastAPI backend with MongoDB and a modern Next.js dashboard frontend.

---

## Features

- Create, read, update, and delete notes
- RESTful API with FastAPI
- MongoDB Atlas integration (async via Motor)
- Typed data validation with Pydantic
- Interactive dashboard built with Next.js and Tailwind CSS
- Responsive dark/light theme support

---

## Project Structure

```
fastapi-mongodb-notes-api/
├── README.md
├── requirements.txt
├── app/
│   ├── database.py
│   ├── main.py
│   ├── models.py
│   ├── routes.py
│   ├── schemas.py
├── notes-dashboard/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── globals.css
│   ├── services/
│   │   ├── api.ts
│   ├── package.json
│   ├── ...
```

---

## Tech Stack

**Backend:**
- FastAPI
- MongoDB Atlas
- Motor (async MongoDB driver)
- Pydantic

**Frontend:**
- Next.js (React)
- Tailwind CSS

---

## Installation

### Backend (API)

```bash
git clone https://github.com/AliSajid55/FastAPI_MongoDB_Notes_API.git
cd FastAPI_MongoDB_Notes_API

python -m venv .venv
# On Windows:
.venv\Scripts\activate
# On Mac/Linux:
source .venv/bin/activate

pip install -r requirements.txt
```

### Frontend (Dashboard)

```bash
cd notes-dashboard
npm install
```

---

## Usage

### Run the FastAPI Server

```bash
uvicorn app.main:app --reload
```

API docs: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

### Run the Next.js Dashboard

```bash
cd notes-dashboard
npm run dev
```

Dashboard: [http://localhost:3000](http://localhost:3000)

---

## API Endpoints

- `GET /api/notes` — List all notes
- `POST /api/notes` — Create a new note
- `GET /api/notes/{id}` — Get a note by ID
- `PUT /api/notes/{id}` — Update a note by ID
- `DELETE /api/notes/{id}` — Delete a note by ID

---

## Customization

- MongoDB connection settings: edit `app/database.py`
- Dashboard theme: auto-switches based on system preference (dark/light)

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## License

MIT

---
## Frontend

```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

```
## Learn More

```

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

```
## Deploy on Vercel

```

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
## Author

```

Ali Sajid

AI Engineer | Deep Learning | Computer Vision | GEN AI