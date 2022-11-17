import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home/Home';
import { Routes, Route} from "react-router-dom"
import AddJobs from './pages/add-jobs/AddJobs';
import Profile from './pages/profile/Profile';
import Auth from './pages/auth/Auth';
import AuthRegister from './pages/auth/AuthRegister';
import ErrorPage from './pages/errorpage/ErrorPage';
import { ContextProvider } from './context/Context';
import Jobs from './pages/AllJobs/Jobs';
import ProtectRoute from './protectRoute/ProtectRoute';
import Search from './pages/search/Search';
  
function App() {
  return (
    <>
      <ToastContainer />
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="home" element={<ProtectRoute><Home /></ProtectRoute>} />
          <Route path="all-jobs" element={<ProtectRoute><Jobs /></ProtectRoute>} />
          <Route path="add-jobs" element={<ProtectRoute><AddJobs /></ProtectRoute>} />
          <Route path="update-jobs/:id" element={<ProtectRoute><AddJobs /></ProtectRoute>} />
          <Route path="profile" element={<ProtectRoute><Profile /></ProtectRoute>} />
          <Route path="search" element={<ProtectRoute><Search /></ProtectRoute>} />
          <Route path="register" element={<AuthRegister />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
