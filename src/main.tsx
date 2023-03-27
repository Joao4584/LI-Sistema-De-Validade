import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

declare global {
  interface Window {
    popListValidade: {
      active: boolean,
      descricao: string,
      validades: {
        codigo: string,
        data: string
      }[]
    };
  }
}

ReactDOM.createRoot(document.getElementById('JR-PopUp-Validade-Config') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
