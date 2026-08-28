import { Link } from 'react-router-dom'
import heroImg from '../images/about-hero.png' // Adjust file extension if using .jpg

export function About() {
  return (
    <main className="about-page">
      <div className="about-hero">
        <img 
          src={heroImg} 
          alt="Person sitting on top of a camper van at night" 
        />
      </div>

      <div className="about-text">
        <h1>
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>

        <p>
          Our mission is to enliven your road trip with the perfect travel
          rental. Our vans are refurbished before each trip to ensure your
          travel plans can go off without a hitch.
        </p>

        <p>
          Our team is full of vanlife enthusiasts who know firsthand the
          magic of touring the world on 4 wheels.
        </p>
      </div>

      <section className="about-cta">
        <h2>
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>

        <Link to="/vans" className="cta-button">
          Explore our vans
        </Link>
      </section>
    </main>
  )
}