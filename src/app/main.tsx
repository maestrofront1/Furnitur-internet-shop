import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from '../pages/Home'
const rootElement = document.getElementById('root')
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<Home />
		</StrictMode>,
	)
}
