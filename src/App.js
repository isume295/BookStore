/* eslint-disable import/no-extraneous-dependencies */
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
