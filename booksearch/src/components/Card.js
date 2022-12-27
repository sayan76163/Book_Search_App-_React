// import React, { useState } from 'react';


const Card = ({books}) => {
    
    return (
        <>
        {
            books.map((item)=>{
                return <div className="show" key={item.id}>
                 <h3>Book Tittle-{item.volumeInfo.title}</h3>
                 <h4>Author Name-{item.volumeInfo.authors}</h4>
                 <img src={item.volumeInfo.imageLinks} alt=""/>
                 <p>page Count{item.volumeInfo.pageCount}</p>
                 <img src={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail} alt="booksimages"></img>
                 <h6>Rating-{item.volumeInfo.averageRating}</h6>

                </div>
                
                
            })
        }


        </>
    );
};

export default Card;