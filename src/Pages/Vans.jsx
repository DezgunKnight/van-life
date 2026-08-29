import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Vans.css'


export function Vans() {

  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch("/api/vans")
    .then(res => res.json())
    .then(data => setVans(data.vans))
  }, [])

  const vanElements = vans.map(van => (
            <div key={van.id} className="van-tile">
              <Link 
                to={`/vans/${van.id}`} 
                className="van-tile-link">
                <img src={van.imageUrl} alt="Van Image"/>
                <div className="van-info">
                  <h3>{van.name}</h3>
                  <p>{`$${van.price}/day`}</p>
                  <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </div>
              </Link>
            </div>
          ))
  
  

  return (
    <>
      <main className="page-wrapper">
        <h1>Explore our van options</h1>
        <div className="van-list-container">
          {vanElements}
        </div>
      </main>
    </>
  )
}