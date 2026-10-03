import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard';
import ApiTest from "./components/ApiTest";

//Temporary: For testing purposes, we are directly rendering the Dashboard component. In a real application, you would typically have routing set up to navigate between different pages/components.
import { useAuth } from "./context/AuthContext";
  
function App() {
  const { isAuthenticated } = useAuth();


  // return <ApiTest />;
  //Temp comment: For now, we are directly rendering the Dashboard component for testing purposes. In a real application, you would typically have routing set up to navigate between different pages/components. 
  return (
    <Dashboard />
  );
}

export default App;