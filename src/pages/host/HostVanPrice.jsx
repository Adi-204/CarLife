import React from "react";
import { ReactDOM } from "react";
import { useOutletContext } from "react-router-dom";

export const HostVanPrice = ()=>{
    const [currentVan, setCurrentVan] = useOutletContext();
    return (
        <section className="host-van-detail-price">
            <h3 className="host-van-price">${currentVan.price}<span>/day</span></h3>
        </section>
    )
}
