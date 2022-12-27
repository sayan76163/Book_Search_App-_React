import React from 'react';
import { useState } from 'react';
import axios from "axios";
import Card from './Card';

const Search=() => {
    const[show,setShow]=useState('');
    const[data,setData]=useState([]);
    const bookSearch=(e)=> {
        if(e.key==='Enter')
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+show+'&kEY=AIzaSyD8ICmLetBV1gyU-Ma4Ko_JEEOa_tsbYjM')
        .then(res=>setData(res.data.items))
        .catch(e=>console.log(e))
    }
    return (
        <>
        <div className='main'>
            <div className='b1'>
                <h2>Search your Books</h2>
                <div className='search'>
                    <input type='text' placeholder='Type your book name' value={show} onChange={(e)=>setShow(e.target.value)}
                  onKeyPress={bookSearch} />
                    {/* <button onClick={bookSearch}> TAP HERE </button> */}

                </div>
                
                

            </div>
        </div>
        <div className='b2'>
            <Card books={data}/>

        </div>



        </>
    );
};

export default Search;