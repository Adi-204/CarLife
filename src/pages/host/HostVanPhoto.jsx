import React from "react";
import { ReactDOM } from "react";
import { useOutletContext } from "react-router-dom";


export const HostVanPhoto = ()=>{
    const [currentVan, setCurrentVan] = useOutletContext();
    return (
        <img src={currentVan.imageUrl} className="host-van-detail-image" />
    )
}
