import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Categories from './pages/Categories';
// import { getBooks } from './redux/books/booksSlice';

function App() {
  // const { bookItem } = useSelector((store) => store.book);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getBooks());
  // }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
