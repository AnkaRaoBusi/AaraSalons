import HeroSlider from '../components/HeroSlider'
import BookingForm from '../components/BookingForm'
import OffersSection from '../components/OffersSection'
import aboutImg from '../assets/images/about.jpg'
import catalogPDF from "../assets/catalog_compressed.pdf";



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
      <OffersSection />

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
  href={catalogPDF}
  className="secondary-button"
  target="_blank"
  rel="noopener noreferrer"
>
  View Service Menu (PDF)
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
            <p>Phone: +91 9247522061</p>
            <a
              href="https://maps.app.goo.gl/CaoXiRGSqCjDpb7KA"
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
              "Hi myself Vandana I took service in Aara salon it was a Gud experience because of their services like facial ,hair spa , pedicure and manicure is awesome I really thankful to shifa . She have lot of patience and also she made my day . Krupa have lot information and follow up in call. I really loved there services I became beautiful thanks to Aara team💕"
            </p>
            <p className="review-author">— Vandhana.</p>
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
              "Thankyou @ali 🤗
I recently got my haircut done here, and the service was quite good. The staff were polite, they listened to what I wanted, and the haircut came out neat and well-shaped. The place was clean, and the overall experience was comfortable. I’ll consider coming back again...."
            </p>
            <p className="review-author">— Sushma Nalluri.</p>
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
              "I had my haircut done by Ali and I’m extremely happy with the result. He’s skilled, patient, and paid attention to every detail. The service was outstanding. Highly recommended!"
            </p>
            <p className="review-author">— Bhanu Madivada.</p>
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
