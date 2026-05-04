import { useState } from 'react'
import BookCoverGenerator from './pages/BookCoverGenerator'
import Header from './components/common/header'
import './App.css'

function App() {
    return (
        <>
            <Header />
            <BookCoverGenerator />
        </>
    )

}

export default App
// npm install openai dotenv
// npm install express

// frontent structure to be followed
// src/
// │
// ├── components/ (reusable pieces)
// │      └── PromptForm.jsx
// │
// ├── pages/ (actual screens)
// │      └── Home.jsx
// │
// ├── services/ (api connections)
// │      └── api.js
// │
// ├── App.jsx
// └── main.jsx
