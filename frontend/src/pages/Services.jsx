import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import servicesHeaderImg from '../assets/images/servicesHeader.jpg'
import womenHaircutImg from '../assets/images/womenHaircut.png'
import womenHairColorImg from '../assets/images/womenHairColor.png'
import womenKeratinImg from '../assets/images/womenKeratin.png'
import womenGoldFacialImg from '../assets/images/womenGoldFacial.png'
import womenFullbodyWaxImg from '../assets/images/womenFullbodyWax.png'
import womenManicureImg from '../assets/images/womenManicure.png'
import bridalMakeupImg from '../assets/images/bridalMakeup.png'
import womenPartyMakeupImg from '../assets/images/womenPartyMakeup.png'
import womenEyeMakeupImg from '../assets/images/womenEyeMakeup.png'
import MenHairCutandBeardImg from '../assets/images/MenHairCutandBeard.png'
import MenSubtleHighlightsImg from '../assets/images/MenSubtleHighlights.jpg'
import MenHairSpaImg from '../assets/images/MenHairSpa.png'
import MenDetanImg from '../assets/images/MenDetan.jpg'
import MenPedicureImg from '../assets/images/MenPedicure.jpg'
import MenFacialCleanupImg from '../assets/images/MenFacialCleanup.jpg'
import GroomMakeupImg from '../assets/images/GroomMakeup.jpg'

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('women')
  const [activeSubCategory, setActiveSubCategory] = useState({
    women: 'women-hair',
    men: 'men-hair'
  })
  const navigate = useNavigate()

  const scrollToBooking = () => {
    navigate('/#booking')
    setTimeout(() => {
      const element = document.querySelector('#booking')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    // Reset to first sub-category when switching main categories
    setActiveSubCategory({
      ...activeSubCategory,
      [category]: category === 'women' ? 'women-hair' : 'men-hair'
    })
  }

  const handleSubCategoryChange = (subCategory) => {
    setActiveSubCategory({
      ...activeSubCategory,
      [activeCategory]: subCategory
    })
  }

  const womenServices = {
    'women-hair': [
      {
        title: 'Signature Hair Cut & Wash',
        image: womenHaircutImg,
        description: 'A precision cut tailored to your face shape, followed by a luxurious wash and blow-dry.'
      },
      {
        title: 'Global Hair Coloring',
        image: womenHairColorImg,
        description: 'Full coverage color application, using premium, ammonia-free products for vibrant shine.'
      },
      {
        title: 'Keratin Smoothing Treatment',
        image: womenKeratinImg,
        description: 'Eliminate frizz and achieve smooth, straight, manageable hair for months.'
      }
    ],
    'women-skin': [
      {
        title: '24K Gold Luxury Facial',
        image: womenGoldFacialImg,
        description: 'Anti-aging treatment designed to detoxify, hydrate, and restore a youthful glow.'
      },
      {
        title: 'Full Body Waxing (Rica)',
        image: womenFullbodyWaxImg,
        description: 'Gentle and efficient hair removal using premium Italian Rica wax.'
      },
      {
        title: 'Luxury Spa Manicure',
        image: womenManicureImg,
        description: 'Exfoliation, massage, and nail shaping for beautiful, well-nourished hands.'
      }
    ],
    'women-makeup': [
      {
        title: 'The AARA Bridal Package',
        image: bridalMakeupImg,
        description: 'Complete look for the big day, including pre-bridal skin prep and trial sessions.'
      },
      {
        title: 'HD Party/Event Makeup',
        image: womenPartyMakeupImg,
        description: 'Flawless HD application perfect for any evening event or special occasion.'
      },
      {
        title: 'Eye Styling & Lashes',
        image: womenEyeMakeupImg,
        description: 'Focus on dramatic eye artistry, including premium strip or cluster lash application.'
      }
    ]
  }

  const menServices = {
    'men-hair': [
      {
        title: 'The Executive Hair & Beard Service',
        image: MenHairCutandBeardImg,
        description: 'Precision haircut, hot towel service, and detailed beard shaping/trimming.'
      },
      {
        title: 'Subtle Hair Highlights',
        image: MenSubtleHighlightsImg,
        description: 'Natural-looking, low-maintenance highlights for dimension and style.'
      },
      {
        title: 'Deep Conditioning Hair Spa',
        image: MenHairSpaImg,
        description: 'Therapeutic spa treatment to nourish the scalp and strengthen hair roots.'
      }
    ],
    'men-skin': [
      {
        title: 'De-Tan Facial Clean-Up',
        image: MenDetanImg,
        description: 'Targeted treatment to remove sun damage and restore even skin tone.'
      },
      {
        title: 'Sport Pedicure',
        image: MenPedicureImg,
        description: 'Deep cleansing and relaxation for feet, designed for the active individual.'
      },
      {
        title: 'Basic Refresh Facial',
        image: MenFacialCleanupImg,
        description: 'Quick, deep-pore cleansing and moisturizing for instant skin revitalization.'
      }
    ],
    'men-makeup': [
      {
        title: 'The AARA Groom Package',
        image: GroomMakeupImg,
        description: 'Natural, non-cakey makeup to conceal imperfections for photos and events.'
      }
    ]
  }

  const renderServiceCards = (services) => {
    return services.map((service, index) => (
      <div key={index} className="service-card-detail">
        <img src={service.image} alt={service.title} className="service-image" />
        <h4>{service.title}</h4>
        <p>{service.description}</p>
        <Link
          to="/#booking"
          className="service-book-link"
          onClick={(e) => {
            e.preventDefault()
            scrollToBooking()
          }}
        >
          {service.title.includes('Bridal') || service.title.includes('Groom') ? 'Consultation' : 'Book Now'}
        </Link>
      </div>
    ))
  }

  return (
    <>
      <header className="services-header" style={{ backgroundImage: `url(${servicesHeaderImg})` }}>
        <div className="header-overlay">
          <div className="header-content">
            <h1 className="main-headline">The Complete Service Menu</h1>
            <p className="tagline">Bespoke treatments tailored for him and her.</p>
          </div>
        </div>
      </header>

      <section id="service-menu" className="section service-menu-section">
        <div className="category-tabs">
          <button
            className={`tab-button ${activeCategory === 'women' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('women')}
          >
            <i className="fas fa-venus"></i> Women&apos;s Services
          </button>
          <button
            className={`tab-button ${activeCategory === 'men' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('men')}
          >
            <i className="fas fa-mars"></i> Men&apos;s Services
          </button>
        </div>

        <div className="service-content-wrapper">
          {/* Women's Services */}
          <div id="women" className={`service-category-content ${activeCategory === 'women' ? 'active' : ''}`}>
            <div className="sub-category-tabs">
              <button
                className={`sub-tab-button ${activeSubCategory.women === 'women-hair' ? 'active' : ''}`}
                onClick={() => handleSubCategoryChange('women-hair')}
              >
                Hair Artistry
              </button>
              <button
                className={`sub-tab-button ${activeSubCategory.women === 'women-skin' ? 'active' : ''}`}
                onClick={() => handleSubCategoryChange('women-skin')}
              >
                Skin Sanctuary
              </button>
              <button
                className={`sub-tab-button ${activeSubCategory.women === 'women-makeup' ? 'active' : ''}`}
                onClick={() => handleSubCategoryChange('women-makeup')}
              >
                Flawless Makeup
              </button>
            </div>

            <div
              id="women-hair"
              className={`service-detail-list ${activeSubCategory.women === 'women-hair' ? 'active' : ''}`}
            >
              <h3 className="sub-category-title">Hair Cuts, Styles & Coloring</h3>
              <div className="service-grid">{renderServiceCards(womenServices['women-hair'])}</div>
            </div>

            <div
              id="women-skin"
              className={`service-detail-list ${activeSubCategory.women === 'women-skin' ? 'active' : ''}`}
            >
              <h3 className="sub-category-title">Facials, Clean-ups & Waxing</h3>
              <div className="service-grid">{renderServiceCards(womenServices['women-skin'])}</div>
            </div>

            <div
              id="women-makeup"
              className={`service-detail-list ${activeSubCategory.women === 'women-makeup' ? 'active' : ''}`}
            >
              <h3 className="sub-category-title">Bespoke Makeup Artistry</h3>
              <div className="service-grid">{renderServiceCards(womenServices['women-makeup'])}</div>
            </div>
          </div>

          {/* Men's Services */}
          <div id="men" className={`service-category-content ${activeCategory === 'men' ? 'active' : ''}`}>
            <div className="sub-category-tabs">
              <button
                className={`sub-tab-button ${activeSubCategory.men === 'men-hair' ? 'active' : ''}`}
                onClick={() => handleSubCategoryChange('men-hair')}
              >
                Grooming & Hair
              </button>
              <button
                className={`sub-tab-button ${activeSubCategory.men === 'men-skin' ? 'active' : ''}`}
                onClick={() => handleSubCategoryChange('men-skin')}
              >
                Men&apos;s Skin Care
              </button>
              <button
                className={`sub-tab-button ${activeSubCategory.men === 'men-makeup' ? 'active' : ''}`}
                onClick={() => handleSubCategoryChange('men-makeup')}
              >
                Groom Makeup
              </button>
            </div>

            <div
              id="men-hair"
              className={`service-detail-list ${activeSubCategory.men === 'men-hair' ? 'active' : ''}`}
            >
              <h3 className="sub-category-title">Hair Cuts, Styles & Beard Grooming</h3>
              <div className="service-grid">{renderServiceCards(menServices['men-hair'])}</div>
            </div>

            <div
              id="men-skin"
              className={`service-detail-list ${activeSubCategory.men === 'men-skin' ? 'active' : ''}`}
            >
              <h3 className="sub-category-title">Rejuvenation & Detan</h3>
              <div className="service-grid">{renderServiceCards(menServices['men-skin'])}</div>
            </div>

            <div
              id="men-makeup"
              className={`service-detail-list ${activeSubCategory.men === 'men-makeup' ? 'active' : ''}`}
            >
              <h3 className="sub-category-title">Groom Makeup & Concealing</h3>
              <div className="service-grid">{renderServiceCards(menServices['men-makeup'])}</div>
            </div>
          </div>
        </div>

        {/* <p className="section-note">
          *Prices are starting rates and may vary based on hair length, product usage, and stylist level.
        </p> */}
      </section>
    </>
  )
}

export default Services
