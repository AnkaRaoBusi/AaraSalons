import HeroSlider from '../components/HeroSlider'
import BookingForm from '../components/BookingForm'
import aboutImg from '../assets/images/about.jpg'

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <HeroSlider />

      {/* ABOUT SECTION */}
      <section id="about" className="section about-section">
        <h2 className="section-title">Our Dedication to Bespoke Beauty</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              AARA Salon was founded on the philosophy that true beauty is deeply personal. We don't
              believe in one-size-fits-all treatments. Our mission is to provide a serene sanctuary
              where artistry, advanced techniques, and premium products converge to create tailored
              experiences.
            </p>
            <p>
              Each visit to AARA is a bespoke journey designed to enhance your natural elegance and
              promote holistic well-being. From our master stylists and licensed estheticians to our
              warm, luxurious ambiance, every detail is curated to ensure your utmost satisfaction
              and long-lasting results.
            </p>
            <a
              href="#reviews"
              className="secondary-button"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#reviews')
              }}
            >
              Meet Our Experts
            </a>
          </div>
          <div className="about-image-wrapper">
            <img
              src={aboutImg}
              alt="Expert Salon Stylist"
              className="about-image animated-oval"
            />
          </div>
        </div>
      </section>

      {/* SERVICES (PILLARS) SECTION */}
      <section id="services" className="section pillars-section">
        <h2 className="section-title">Elevate Your Look: Our Three Pillars</h2>
        <div className="service-container">
          <div className="service-card">
            <i className="fas fa-cut service-icon"></i>
            <h4>The Art of Hair (Unisex)</h4>
            <p>
              Precision cuts, custom coloring, and transformative treatments executed by master
              stylists.
            </p>
          </div>
          <div className="service-card">
            <i className="fas fa-magic service-icon"></i>
            <h4>The Makeup Studio</h4>
            <p>
              Bespoke bridal, party, and editorial makeup artistry that captures your unique vision
              flawlessly.
            </p>
          </div>
          <div className="service-card">
            <i className="fas fa-spa service-icon"></i>
            <h4>The Skin Sanctuary</h4>
            <p>
              Advanced facials, specialized clean-ups, and targeted skin therapies for radiant,
              lasting health.
            </p>
          </div>
        </div>
        <a
          href="/services"
          className="secondary-button"
          onClick={(e) => {
            e.preventDefault()
            window.location.href = '/services'
          }}
        >
          View Service Menu & Book
        </a>
      </section>

      {/* BOOKING SECTION */}
      <BookingForm />

      {/* LOCATIONS SECTION */}
      <section id="locations" className="section locations-section">
        <h2 className="section-title">Find Your AARA Sanctuary</h2>
        {/* <p className="tagline-dark">Two convenient, premium locations built for your relaxation.</p> */}

        <div className="location-container">
          <div className="location-card">
            <h3>AARA SALON - Nizampet</h3>
            <address>
              1st Floor, SBI Building, Nizampet Rd<br />
              Nizampet, Hyderabad, 500090
            </address>
            <p>Phone: +91 9247522063</p>
            <a
              href="https://maps.app.goo.gl/A69N3dNLugy1cT1LA"
              target="_blank"
              rel="noopener noreferrer"
              className="location-link"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="section reviews-section">
        <h2 className="section-title-reviews">Client Love. Lasting Impressions.</h2>
        <p className="tagline-dark-reviews">
          Hear from those who've experienced the AARA difference.
        </p>

        <div className="review-container">
          <div className="review-card">
            <div className="star-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="review-text">
              "The best hair coloring service I've ever had. My stylist, was an absolute
              professional and truly listened to what I wanted. Worth every penny!"
            </p>
            <p className="review-author">— Anjali M.</p>
          </div>
          <div className="review-card">
            <div className="star-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="review-text">
              "I booked my bridal makeup here and was blown away. Flawless execution and I felt so
              relaxed. The team is genuinely lovely."
            </p>
            <p className="review-author">— Jahnvi P.</p>
          </div>
          <div className="review-card">
            <div className="star-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="review-text">
              "Great facial treatment! My skin felt rejuvenated. Only slight wait time, but the
              service quality makes up for it. Highly recommend."
            </p>
            <p className="review-author">— Keerthi K.</p>
          </div>
        </div>
        <a
          href="#booking"
          className="secondary-button"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('#booking')
          }}
        >
          Leave a Review
        </a>
      </section>
    </>
  )
}

export default Home
