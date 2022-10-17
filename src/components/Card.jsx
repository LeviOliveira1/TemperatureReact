/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
import React from 'react';
import propTypes from 'prop-types';

function Card({ data }) {

    const {
        location,
        current,
    } = data;

    return (

        <div id="caixa" className="bg-white p-6 mt-10 rounded-lg shadow-xl min-w-[220px] mr-20">
            <div className="text-center">
            <span className="block text-lg font-bold text-slate-810">{location.name}</span>
            <span className="text-slate-900 text-sm font-medium">{`${location.region} , ${location.country}`}</span>
            </div>
           
            <div className="mt-4 flex  mb-2 justify-center">
            <span className="text-6xl">{current.temp_c}</span>
            <span className="text-xl mt-1">°C</span>
            </div>

            <div className="flex justify-center flex-col items-center">
            <img src={current.condition.icon} alt="" />
            <span className="text-slate-700 font-medium">{current.condition.text}</span>
            </div>
      
        </div>
    );
}

export default Card;

Card.propTypes = {
    data: propTypes.object,
}.isRequired;