import { createRoot } from 'react-dom/client'
import App from './routes/App/App.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import './index.css'

createRoot(document.getElementById('root')).render(<Provider store={store}>
    <App />
</Provider>)
