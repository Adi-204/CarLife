import React from "react";
import { ReactDOM } from "react";
import { useOutletContext } from "react-router-dom";


export const HostVanPhoto = ()=>{
    const [currentVan, setCurrentVan] = useOutletContext();
    return (
        <section className="host-van-detail-photo">
            <img src={currentVan.imageUrl} className="host-van-detail-image" />
        </section>
    )
}
