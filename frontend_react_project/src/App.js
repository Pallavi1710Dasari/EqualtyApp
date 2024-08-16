import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/index.js'
import Chat from './pages/Chat/index.js'
import Login from './components/Login/index.js';

function App() {
  

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/chats" element={<Chat/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;