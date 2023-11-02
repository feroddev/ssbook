import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookInfo from './pages/BookInfo';
import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="/book/:bookId" element={ <BookInfo /> } />
      </Route>
    </Routes>
  );
}

export default App;
