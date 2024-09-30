import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import './index.css'

const items = [
    'steer',
    'mountain goat',
    'bear',
    'burro',
    'alpaca',
    'eland',
    'crocodile',
    'gopher',
    'mandrill',
    'sheep',
    'porpoise',
    'kitten',
    'turtle',
    'polar bear',
    'weasel',
    'dog',
    'jackal',
    'moose',
    'wildcat',
    'mongoose',
    'wolverine',
]

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App items={items} />
    </StrictMode>
)
