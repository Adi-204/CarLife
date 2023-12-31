import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";

export async function loader(){
    return getHostVans();
}

export const HostVans = ()=>{
    
    const vansList = useLoaderData();

    const vanListElement = vansList.map((van)=>{
        return <Link
            to={`${van.id}`}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    })

    return(
        <section className="host-vans">
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    <section>
                        {vanListElement}
                    </section>
                }
            </div>
        </section>
    )
}

