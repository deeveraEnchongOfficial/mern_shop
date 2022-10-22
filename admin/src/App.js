import './App.css';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app">
      <ToastContainer position='bottom-center' limit={1} />
      <Home />
    </div>
  );
}

export default App;
