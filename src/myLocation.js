import  { useState, useEffect } from 'react';

function MyLocation(props) {

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(pos=>{
        const {latitude,longitude} = pos.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        fetch(url).then(res=>res.json()).then(data=>props.setAdd(data.address))
    })
},[])
console.log(props.add.city)
}

export default MyLocation;