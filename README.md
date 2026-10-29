# 🥷 Akatsuki’s Draft

### Nodevember 4.0 — Backend Submission

<p align="center">
  <strong>✨ Every great idea deserves a better draft.</strong>
  <br />
  An AI-powered content-sharing platform built with Node.js, Express, MongoDB, and Google Gemini AI.
</p>

<p align="center">
  ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
  ![Express](https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express)
  ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
  ![Gemini AI](https://img.shields.io/badge/Gemini_AI-8E75B2?style=for-the-badge)
</p>

---

## 🌑 About the project

**Akatsuki’s Draft** is a backend for a content-sharing platform where users can create drafts, manage posts, and enhance their writing with AI.

It includes JWT authentication, MongoDB integration, and an admin approval workflow that helps keep published content organized.

### ✨ Key features

- 🔐 User registration, login, and JWT authentication
- 📝 Create, update, and manage posts and drafts
- 🛡️ Admin approval and rejection workflows
- 🤖 AI-powered content improvement using Gemini
- 🗄️ MongoDB database integration
- 🧪 API testing with Postman

## 🧰 Tech stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT and bcrypt
- **AI integration:** Google Gemini
- **API testing:** Postman

---

## 🚀 Getting started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/atlas) account
- [Google AI Studio API key](https://aistudio.google.com/app/apikey)
- Postman (optional)

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd <YOUR_PROJECT_FOLDER>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_random_secret
GEMINI_API_KEY=your_gemini_api_key
```

Replace the example values with your actual credentials. Never upload `.env` or expose API keys on GitHub.

### 4. Start the server

Use the scripts configured in your `package.json`:

```bash
npm run dev
```

Or, if a start script is configured:

```bash
npm start
```

The expected local URL is `http://localhost:5000`.

---

## 📡 API endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/register` | Register a user |
| POST | `/auth/login` | Log in |
| GET | `/auth/me` | Get current user profile |

### Posts and drafts

| Method | Endpoint | Description |
|---|---|---|
| POST | `/posts` | Create a post or draft |
| GET | `/posts` | View approved posts |
| GET | `/posts/:id` | View a post |
| GET | `/posts/my-posts` | View your own posts |
| PATCH | `/posts/:id` | Update your post |
| DELETE | `/posts/:id` | Delete your post |

### Admin workflow

| Method | Endpoint | Description |
|---|---|---|
| GET | `/admin/posts/pending` | View pending posts |
| PATCH | `/admin/posts/approve/:id` | Approve a post |
| PATCH | `/admin/posts/reject/:id` | Reject a post |

### AI content improvement

| Method | Endpoint | Description |
|---|---|---|
| POST | `/ai/improve/:postId` | Generate an improved draft |

Protected endpoints require a valid bearer token. Admin endpoints require administrator authorization.

---

## 🧪 Testing with Postman

If `postman_collection.json` is included in the repository:

1. Open Postman and select **Import**.
2. Select the collection file.
3. Configure the base URL and authentication tokens.
4. Test registration, login, post management, admin approval, and AI enhancement.

---

## 🏆 Nodevember 4.0

Built with curiosity, code, and a little Akatsuki spirit. 🌑

**Draft thoughtfully. Create boldly. Share meaningfully.**

### 👨‍💻 Maintainer

- **GitHub:** `<YOUR_GITHUB_PROFILE_URL>`
- **Repository:** `<YOUR_REPOSITORY_URL>`
