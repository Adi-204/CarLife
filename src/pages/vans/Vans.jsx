import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Link,useLoaderData,useSearchParams } from 'react-router-dom';
import { getVans } from '../../api';

export function loader(){
    return getVans();
}

export const Vans = () =>{
    const [searchParams , setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");
    const [loading,setLoading] = React.useState(false);
    const [error,setError] = React.useState(null);
    const vans = useLoaderData();

    const filteredVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans;

    const vanElements = filteredVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link 
                to={`${van.id}` }
                state={
                    {
                        search : searchParams.toString(),
                        type : typeFilter
                    }
                } 
            >
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    function handleFilterChange(key,val){
        setSearchParams(prevParams =>{
            if(val == null){
                prevParams.delete(key);
            }else{
                prevParams.set(key,val);
            }
        })
    }

    if(error){
        return <h1 aria-live='assertive'>There was an error : {error.message}</h1>
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button 
                    className={`van-type simple ${typeFilter === 'simple' ? 'selected' : null}`} 
                    onClick={() => handleFilterChange("type","simple")}
                >
                    Simple
                </button>
                <button 
                    className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' : null}`}
                    onClick={() => handleFilterChange("type","luxury")}
                >
                    Luxury
                </button>
                <button
                className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' :
                    null}`}
                    onClick={() => handleFilterChange("type","rugged")}
                >
                    Rugged
                </button>
                {typeFilter && <button 
                    className='van-type clear-filters'
                    onClick={() => handleFilterChange("type",null)}
                >
                    Clear
                </button>}
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}

