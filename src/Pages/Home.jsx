import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="site-wrapper">
      
      <main className="home-container">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="/vans" className="home-btn">Find your van</Link>
      </main>

      <footer>&#169; 2026 #VANLIFE</footer>
    </div>
  )
}
