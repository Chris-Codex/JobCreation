import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navibar from './components/navibar/Navibar';
import Home from './pages/home/Home';
  
function App() {
  return (
    <section>
      <ToastContainer />
      <Navibar />
      <Home />
    </section>
  );
}

export default App;
