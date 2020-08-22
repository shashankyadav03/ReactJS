import React from 'react';

const Artist = ({ artist }) => {
    if(!artist) return null;

   const {images,name,followers,genres} = artist;

   

   return(
       <div>
           <h1></h1>
           <h3>{name}</h3>
           <p>{followers.total+' Followers'}</p>
           <p>{'Generes : '+genres.join('/')}</p>
           <img src={images[0].url}
            alt='artist-profile'
            style={{
                width:220,
                height:220,
                borderRadius:120,
                objectFit:'cover'
                
            }} />

       </div>
   )
}

export default Artist;