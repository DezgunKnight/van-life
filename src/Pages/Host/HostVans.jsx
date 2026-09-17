import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



export function HostVans() {

const [vans, setVans] = useState([])

useEffect(() => {
    fetch("/api/host/vans")
    .then(res => res.json())
    .then(data => setVans(data.vans))
}, [])



const styles = {
        container: {
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            padding: "18px 24px",
            marginBottom: "15px",
            borderRadius: "6px"
        },

        link: {
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        color: "inherit",
        width: "100%"
        },

        image: {
            height: "70px",
            borderRadius: "5px",
            marginRight: "17px"
        },
        title: {
            fontSize: "20px",
            fontWeight: 600,
            margin: "0 0 5px 0"
        },
        price: {
            margin: 0,
            color: "#4D4D4D"
        }
    }





const hostVanElements = vans.map(van => (
    <div 
      key={van.id} 
      style={styles.container}>
      <Link 
          to={`/host/vans/${van.id}`} 
          style={styles.link}>
        <img 
          src={van.imageUrl} 
          alt="Van Image"
          style={styles.image}
          />
        <div style={{ display: "flex", flexDirection: "column" }} >
          <h3 style={styles.title} >{van.name}</h3>
          <p style={styles.price}>{`$${van.price}/day`}</p>
        </div>
      </Link>
    </div>
))


    return(
        <main style={{ padding: "30px 26px" }}>
        <h1 style={{ fontSize: "30px", marginBottom: "30px" }}>Your listed vans</h1>
        <div>
            {vans.length > 0 ? hostVanElements : <h2>Loading...</h2>}
        </div>
    </main>
    )
}