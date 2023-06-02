import React from 'react'
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate qui sunt soluta, unde id porro iure minus eum eos iste quisquam doloremque nam vitae repellat corrupti enim dicta recusandae culpa, saepe neque libero. Vitae libero repellendus sunt, non quasi magni?</p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="woman and the browser" className='img' />
            </div>
        </div>
    </section>
  )
}

export default Hero