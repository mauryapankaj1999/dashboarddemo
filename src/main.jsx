import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "antd/dist/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { ConfigProvider } from "antd";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ConfigProvider
    theme={{
    token: {
      fontFamily: "Inter, system-ui, sans-serif",
      borderRadius: 12,
    },
    components: {
      Menu: {
        itemHoverColor: "#000000",
      },
    },
  }}
  >

    <App />
  </ConfigProvider>
  </StrictMode>,
)
