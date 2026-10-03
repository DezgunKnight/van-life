import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import './Vans.css'


const filterStyles = {
  container: {
    display: "flex",
    gap: "15px",
    marginBottom: "40px",
    alignItems: "center",
  },
  button: {
    padding: "8px 18px",
    borderRadius: "5px",
    fontWeight: "500",
    textDecoration: "none",
    color: "#4d4d4d",
    backgroundColor: "#ffead0",
    border: "none",
    cursor: "pointer",
  },
  selectedButton: {
    padding: "8px 18px",
    borderRadius: "5px",
    fontWeight: "500",
    textDecoration: "none",
    color: "#ffead0",
    backgroundColor: "#161616",
    border: "none",
    cursor: "pointer",
  },
  clearLink: {
    color: "#4d4d4d",
    textDecoration: "underline",
    fontSize: "0.9rem",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
  }
}


export function Vans() {

  const [searchParams, setSearchParams] = useSearchParams()

  const typeFilter = searchParams.get("type")


  const [vans, setVans] = useState([])

  const displayedVans = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter.toLowerCase()) : vans



  const vanTypes = [... new Set(vans.map(van => van.type))]
  



  useEffect(() => {
    fetch("/api/vans")
    .then(res => res.json())
    .then(data => setVans(data.vans))
  }, [])

  const vanElements = displayedVans.map(van => (
            <div key={van.id} className="van-tile">
              <Link 
                to={van.id} 
                state={{search: searchParams.toString()}}
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
        
      <div style={filterStyles.container}>
        {
          vanTypes.map(type => (
            <Link 
              key={type}
              to={`?type=${type}`} 
              style={typeFilter === type ? filterStyles.selectedButton : filterStyles.button}
        >{type}</Link>
          ))
        }



        {typeFilter && (
          <Link to=".">
            Clear filter
          </Link>
        )}

      </div>
        
        <div className="van-list-container">
          {vanElements}
        </div>
      </main>
    </>
  )
}