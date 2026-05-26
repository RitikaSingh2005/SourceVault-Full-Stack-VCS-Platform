# SourceVault: Full-Stack Version Control System Platform 🚀

SourceVault is a production-ready, open-source version control platform (VCS) built to replicate the core workflows of GitHub. Designed from scratch using the MERN stack, it enables developers to create repositories, track file versions, commit modifications, and manage source code seamlessly through an intuitive web-based interface.

---

## 🌟 Key Features

* **Custom Version Control System (VCS):** Programmatic file tracking and directory snapshots mimicking baseline Git mechanisms.
* **Repository Lifecycle Management:** Native support for repository creation, initialization, and structured public/private data visibility.
* **Secure Authentication & Session Management:** Encrypted user registration and multi-session state preservation utilizing JSON Web Tokens (JWT).
* **Interactive Code Explorer:** Fully responsive repository dashboard featuring real-time file tree traversal and source code visualization.
* **Decoupled RESTful Architecture:** Distributed client-server ecosystem with isolated API routes and robust error-handling protocols.

---

## 💻 Tech Stack

### Frontend (Client)
* **React.js** (Component-driven architecture with context-driven state management)
* **Tailwind CSS** (Highly optimized utility styling for a clean, modern dashboard interface)
* **Axios** (Asynchronous client-server communications with dynamic interceptors)

### Backend (Server)
* **Node.js & Express.js** (High-throughput RESTful routing and background filesystem management)
* **MongoDB & Mongoose** (NoSQL document model layer designed for dynamic entity relationship scaling)
* **JWT & Bcrypt** (Cryptographic hashing and state-independent request validation mechanisms)

---

## 📂 System Architecture

```text
├── frontend-main/        # Single Page Application (SPA) Client
│   ├── src/
│   │   ├── components/   # Modular UI elements (Explorer, Navbar)
│   │   ├── pages/        # View definitions (Dashboard, Auth, RepoView)
│   │   └── api/          # Unified API middleware execution layer
│   └── package.json
│
└── backend-main/         # Core API Services (VCS Server)
    ├── models/           # Data schemas (Users, Repositories, Commits)
    ├── routes/           # Authentication and VCS file-handling endpoints
    ├── server.js         # Production environment entry-point
    └── package.json
