import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import CountryList from './components/CountryList';
import CityList from './components/CityList';
import Pricing from './pages/Pricing';
import AppLayout from './pages/AppLayout';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import Form from './components/Form';
import City from './components/City';

const BASE_URL = 'http://localhost:9000';

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    async function fetchCities() {
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert('There was an error loading data...');
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/app" element={<AppLayout />}>
        <Route
          index
          element={<Navigate replace to='cities' />}
        />
        <Route
          path="cities"
          element={<CityList cities={cities} isLoading={isLoading} />}
        />
        <Route path="cities/:id" element={<City />} />
        <Route
          path="countries"
          element={<CountryList cities={cities} isLoading={isLoading} />}
        />
        <Route path="form" element={<Form />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
