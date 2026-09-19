import React, { useState, useEffect } from 'react'
import { useParams, Link, NavLink, Outlet } from 'react-router-dom'

const navContainerStyles = {
    display: "flex",
    gap: "50px",
    padding: "20px 26px"
}

const baseLinkStyles = {
    textDecoration: "none",
    color: "#4D4D4D",
    fontWeight: 500,
    padding: "5px 0"
}

const activeLinkStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}

export function HostVanDetail() {
    const params = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans[0]))
    }, [params.id])

return (
<div className="van-detail-container">
<Link to="/host/vans" className="back-button">&larr; <span>Back to host vans list</span></Link>

{van ? (
    <div className="van-detail">
      <img src={van.imageUrl} alt={van.name} />
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
      <h2>{van.name}</h2>
      <p className="van-price"><span>${van.price}/day</span></p>

    <nav style={navContainerStyles}>
    <NavLink 
        to="." 
        end 
        style={({ isActive }) => isActive ? { ...baseLinkStyles, ...activeLinkStyles } : baseLinkStyles}
    >
        Details
    </NavLink>
  
    <NavLink 
        to="pricing" 
        style={({ isActive }) => isActive ? { ...baseLinkStyles, ...activeLinkStyles } : baseLinkStyles}
    >
        Pricing
    </NavLink>
    
    <NavLink 
        to="photos" 
        style={({ isActive }) => isActive ? { ...baseLinkStyles, ...activeLinkStyles } : baseLinkStyles}
    >
        Photos
    </NavLink>
    </nav>

    <Outlet />
    </div>
    ) : <h2>Loading...</h2>}
    </div>
    )
}