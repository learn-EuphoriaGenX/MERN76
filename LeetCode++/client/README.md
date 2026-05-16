leetcode-plus-plus/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/              # Images, icons, fonts
│   ├── components/          # Reusable UI components
│   │   ├── common/          # Buttons, Inputs, Loader
│   │   ├── layout/          # Navbar, Sidebar, Footer
│   │   └── problem/         # ProblemCard, CodeEditor UI
│   │
│   ├── pages/               # Route-based pages
│   │   ├── Home.jsx
│   │   ├── Problems.jsx
│   │   ├── ProblemDetail.jsx
│   │   ├── Contest.jsx
│   │   ├── Profile.jsx
│   │   └── Auth/
│   │       ├── Login.jsx
│   │       └── Register.jsx
│   │
│   ├── routes/              # Routing config
│   │   └── AppRoutes.jsx
│   │
│   ├── hooks/               # Custom hooks
│   │   ├── useAuth.js
│   │   ├── useProblems.js
│   │   └── useCodeRunner.js
│   │
│   ├── context/             # Context API / global state
│   │   ├── AuthContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── redux/ (optional)    # If using Redux Toolkit
│   │   ├── store.js
│   │   ├── slices/
│   │   │   ├── authSlice.js
│   │   │   └── problemSlice.js
│   │
│   ├── services/            # API calls
│   │   ├── api.js           # axios config
│   │   ├── authService.js
│   │   ├── problemService.js
│   │   └── submissionService.js
│   │
│   ├── utils/               # Helper functions
│   │   ├── constants.js
│   │   ├── format.js
│   │   └── difficultyColor.js
│   │
│   ├── styles/              # Global styles
│   │   ├── index.css
│   │   └── theme.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── config.js            # env configs
│
├── .env
├── package.json
└── vite.config.js / webpack.config.js