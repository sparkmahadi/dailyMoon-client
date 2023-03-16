import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/router';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
    </RouterProvider>
    </Provider>
  );
}

export default App;
