import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Thêm Provider
import { store } from './redux/store'; // Sử dụng named import
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Bọc App với Provider */}
      <App />
    </Provider>
  </StrictMode>
);
