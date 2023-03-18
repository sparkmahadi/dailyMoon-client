import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/router';
import { store } from './redux/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        <ToastContainer/>
    </RouterProvider>
    </Provider>
  );
}

export default App;
