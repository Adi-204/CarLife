import React from "react";
import { ReactDOM } from "react";
import { useOutletContext } from "react-router-dom";

export const HostVanPrice = ()=>{
    const [currentVan, setCurrentVan] = useOutletContext();
    return (
        <h3 className="host-van-price">${currentVan.price}<span>/day</span></h3>
    )
}
