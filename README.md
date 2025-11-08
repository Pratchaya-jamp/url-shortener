# 🔗 URL Shortener - Project Assignment for ElysianNXT

This is a URL shortener web application built as a project assignment. It is built with React, a pure Node.js (no-framework) backend, and Google Firestore, all containerized with Docker.

**Live Demo:** [https://shortyurl.ddns.net](https://shortyurl.ddns.net)

---

## ✨ Features

* **Shorten:** Generates a 7-character short link from any long URL.
* **Redirect:** All generated short links are fully functional and redirect to their original destination.
* **Cache:** If a user submits a URL that has already been shortened, the system returns the existing short link ("Storage/Cache for repeated link" requirement).
* **Secure:** Fully served over HTTPS (SSL).
* **Containerized:** The entire application (frontend and backend) is deployed using Docker Compose.

---

## 🛠️ Tech Stack

* **Frontend:**
    * [React](https://reactjs.org/)
    * [Emotion](https://emotion.sh/docs/styled) (for CSS-in-JS, as per assignment requirements)
* **Backend:**
    * [Node.js](https://nodejs.org/) (Using the native `http` module, no external frameworks like Express)
* **Database:**
    * [Google Firestore](https://firebase.google.com/products/firestore) (Used to store `shortCode` and `longUrl` pairs)
* **Deployment:**
    * [Nginx](https://www.nginx.com/) (Acts as the reverse proxy, handles SSL termination, and serves the React app)
    * [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)
    * [Let's Encrypt](https://letsencrypt.org/) (For SSL Certificates)

---

## 🏗️ Architecture

This project uses a 2-Container architecture:

1.  **`frontend` (Nginx + React):** This container acts as the public-facing gateway. It serves the static React app, handles SSL (HTTPS) termination, and reverse-proxies API calls (`/api/*`) and short-link redirects (`/{shortCode}`) to the backend.
2.  **`backend` (Node.js API):** This is an internal container that listens for requests from the `frontend` proxy. It handles all business logic and communication with the Google Firestore database.

---

## 📞 API Endpoints

* **`POST /api/shorten`**
    * Creates a new short URL.
    * **Body (JSON):** `{ "longUrl": "https://..." }`
    * **Response (JSON):** `{ "shortUrl": "https://.../abcdefg" }`

* **`GET /{shortCode}`** (e.g., `/abcdefg`)
    * Performs a 301 Redirect to the stored `longUrl`.