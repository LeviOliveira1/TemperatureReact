/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-spacing */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
const KEY = 'c4716218493f4e6aadc161951221410';

const fetchData = async (city) =>{
    const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`
    
    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();



    return data;
    

};

export default fetchData;