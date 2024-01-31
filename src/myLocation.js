import React, { useState, useEffect } from 'react';

function MyLocation() {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [add,setAdd] = useState('')

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(pos=>{
        const {latitude,longitude} = pos.coords;
        console.log(latitude,longitude)
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        fetch(url).then(res=>res.json()).then(data=>setAdd(data.address))
    })
},[])
  const cityCountry = add.city + ', ' +add.country;
  return cityCountry;
}

export default MyLocation;