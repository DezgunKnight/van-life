import { useState, useEffect } from 'react'


export function Vans() {

  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch("/api/vans")
    .then(res => res.json())
    .then(data => setVans(data.vans))
  }, [])
  
  

  return (
    <>
      <main>
        {vans.map(van => )
        
        }
      </main>
    </>
  )
}