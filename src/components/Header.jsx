import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <header>
      <Link to="/"  className="site-logo">
        #VANLIFE
      </Link>

      <nav>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  )
}