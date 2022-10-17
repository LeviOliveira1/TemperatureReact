/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-console */
/* eslint-disable no-trailing-spaces */
/* eslint-disable arrow-spacing */
import React, { useState } from 'react';
import fetchData from './services/api';
import initialData from './halpers/initialData';
import Card from './components/Card';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

 const handleSubmit = (event) => {
    event.preventDefault();

    fetchData(city).then((response) => {
      setData(response);
    });
  };
  return (
    
    <div className="flex flex-col w-full h-screen items-center sm:justify-center p-4">
      <h1>🌩️Temperature☁️</h1>
      <form onSubmit={handleSubmit} className="fixed bottom-0 w-full flex p-4 sm:relative justify-center">
        <input
          id="caixa2"
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-none w-full sm:max-w-[300px] flex-1"
          value={city}
          onChange={({target: { value } }) => setCity(value)}
        />
        <button 
          id="botao"
          type="submit"
          className="bg-blue-600 p-3 rounded-lg ml-3  text-white font-bold"
        >
          Pesquisar
        </button>
      </form>
      <Card data={data} />
    </div>
  );
}

export default App;
