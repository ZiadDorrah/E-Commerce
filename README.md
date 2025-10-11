https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/

http://localhost:5173/dashboard

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

my-react-app/
├── public/
│ ├── index.html
│ ├── favicon.ico
│ └── assets/
│ └── images/
├── src/
│ ├── app/
│ │ ├── store.js # Redux store configuration
│ │ └── rootReducer.js # Combine all reducers
│ │
│ ├── features/ # Feature-based modules
│ │ ├── auth/
│ │ │ ├── authSlice.js # Redux slice for auth
│ │ │ ├── authAPI.js # API calls for auth
│ │ │ └── authMiddleware.js # Custom middleware (optional)
│ │ │
│ │ ├── user/
│ │ │ ├── userSlice.js
│ │ │ └── userAPI.js
│ │ │
│ │ └── products/
│ │ ├── productsSlice.js
│ │ └── productsAPI.js
│ │
│ ├── pages/ # Page components
│ │ ├── Home/
│ │ │ ├── Home.jsx
│ │ │ └── Home.module.css
│ │ │
│ │ ├── About/
│ │ │ ├── About.jsx
│ │ │ └── About.module.cssذ
│ │ │
│ │ ├── Login/
│ │ │ ├── Login.jsx
│ │ │ └── Login.module.css
│ │ │
│ │ ├── Register/
│ │ │ ├── Register.jsx
│ │ │ └── Register.module.css
│ │ │
│ │ ├── Dashboard/
│ │ │ ├── Dashboard.jsx
│ │ │ └── Dashboard.module.css
│ │ │
│ │ ├── Profile/
│ │ │ ├── Profile.jsx
│ │ │ └── Profile.module.css
│ │ │
│ │ └── NotFound/
│ │ ├── NotFound.jsx
│ │ └── NotFound.module.css
│ │
│ ├── components/ # Reusable components
│ │ ├── common/
│ │ │ ├── Button/
│ │ │ │ ├── Button.jsx
│ │ │ │ └── Button.module.css
│ │ │ │
│ │ │ ├── Input/
│ │ │ │ ├── Input.jsx
│ │ │ │ └── Input.module.css
│ │ │ │
│ │ │ ├── Card/
│ │ │ │ ├── Card.jsx
│ │ │ │ └── Card.module.css
│ │ │ │
│ │ │ ├── Modal/
│ │ │ │ ├── Modal.jsx
│ │ │ │ └── Modal.module.css
│ │ │ │
│ │ │ └── Loader/
│ │ │ ├── Loader.jsx
│ │ │ └── Loader.module.css
│ │ │
│ │ └── layout/
│ │ ├── Header/
│ │ │ ├── Header.jsx
│ │ │ └── Header.module.css
│ │ │
│ │ ├── Footer/
│ │ │ ├── Footer.jsx
│ │ │ └── Footer.module.css
│ │ │
│ │ ├── Sidebar/
│ │ │ ├── Sidebar.jsx
│ │ │ └── Sidebar.module.css
│ │ │
│ │ └── Layout/
│ │ ├── Layout.jsx
│ │ └── Layout.module.css
│ │
│ ├── routes/
│ │ ├── AppRoutes.jsx # Main routing configuration
│ │ ├── PrivateRoute.jsx # Protected route wrapper
│ │ └── PublicRoute.jsx # Public route wrapper
│ │
│ ├── hooks/ # Custom hooks
│ │ ├── useAuth.js
│ │ ├── useDebounce.js
│ │ ├── useLocalStorage.js
│ │ └── useClickOutside.js
│ │
│ ├── utils/ # Utility functions
│ │ ├── constants.js
│ │ ├── helpers.js
│ │ ├── validators.js
│ │ └── formatters.js
│ │
│ ├── services/ # API services
│ │ ├── api.js # Axios instance configuration
│ │ ├── authService.js
│ │ ├── userService.js
│ │ └── productService.js
│ │
│ ├── styles/ # Global styles
│ │ ├── globals.css
│ │ ├── variables.css
│ │ └── mixins.css
│ │
│ ├── types/ # TypeScript types (if using TS)
│ │ ├── auth.types.ts
│ │ └── user.types.ts
│ │
│ ├── App.jsx # Main App component
│ ├── App.css
│ ├── index.js # Entry point
│ └── index.css
│
├── .env # Environment variables
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── jsconfig.json # Path aliases configuration
