import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const persons = [
    {
        id: 1,
        name: 'Arto Hellas',
        number: '050613479'
    },
    {
        id: 2,
        name: 'Linus Torvalds',
        number: '020613479'
    },
    {
        id: 3,
        name: 'Billy Gates',
        number: '050613474'
    }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App persons={persons} />)



