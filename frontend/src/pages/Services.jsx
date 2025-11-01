import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import servicesHeaderImg from '../assets/images/servicesHeader.jpg'

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
        image: 'https://placehold.co/400x300/e0b48b/2c1e1c?text=WOMEN+HAIR+CUT',
        description: 'A precision cut tailored to your face shape, followed by a luxurious wash and blow-dry.'
      },
      {
        title: 'Global Hair Coloring',
        image: 'https://placehold.co/400x300/a38060/f9f5f1?text=WOMEN+GLOBAL+COLOR',
        description: 'Full coverage color application, using premium, ammonia-free products for vibrant shine.'
      },
      {
        title: 'Keratin Smoothing Treatment',
        image: 'https://placehold.co/400x300/8d6a45/2c1e1c?text=KERATIN+TREATMENT',
        description: 'Eliminate frizz and achieve smooth, straight, manageable hair for months.'
      }
    ],
    'women-skin': [
      {
        title: '24K Gold Luxury Facial',
        image: 'https://placehold.co/400x300/d4a373/2c1e1c?text=GOLD+FACIAL',
        description: 'Anti-aging treatment designed to detoxify, hydrate, and restore a youthful glow.'
      },
      {
        title: 'Full Body Waxing (Rica)',
        image: 'https://placehold.co/400x300/f9f5f1/2c1e1c?text=FULL+BODY+WAX',
        description: 'Gentle and efficient hair removal using premium Italian Rica wax.'
      },
      {
        title: 'Luxury Spa Manicure',
        image: 'https://placehold.co/400x300/2c1e1c/f9f5f1?text=MANICURE',
        description: 'Exfoliation, massage, and nail shaping for beautiful, well-nourished hands.'
      }
    ],
    'women-makeup': [
      {
        title: 'The AARA Bridal Package',
        image: 'https://placehold.co/400x300/a38060/f9f5f1?text=BRIDAL+MAKEUP',
        description: 'Complete look for the big day, including pre-bridal skin prep and trial sessions.'
      },
      {
        title: 'HD Party/Event Makeup',
        image: 'https://placehold.co/400x300/d4a373/2c1e1c?text=PARTY+MAKEUP',
        description: 'Flawless HD application perfect for any evening event or special occasion.'
      },
      {
        title: 'Eye Styling & Lashes',
        image: 'https://placehold.co/400x300/f9f5f1/2c1e1c?text=EYE+MAKEUP',
        description: 'Focus on dramatic eye artistry, including premium strip or cluster lash application.'
      }
    ]
  }

  const menServices = {
    'men-hair': [
      {
        title: 'The Executive Hair & Beard Service',
        image: 'https://placehold.co/400x300/2c1e1c/f9f5f1?text=MEN+CUT+BEARD',
        description: 'Precision haircut, hot towel service, and detailed beard shaping/trimming.'
      },
      {
        title: 'Subtle Hair Highlights',
        image: 'https://placehold.co/400x300/8d6a45/2c1e1c?text=MEN+HIGHLIGHTS',
        description: 'Natural-looking, low-maintenance highlights for dimension and style.'
      },
      {
        title: 'Deep Conditioning Hair Spa',
        image: 'https://placehold.co/400x300/e0b48b/2c1e1c?text=HAIR+SPA',
        description: 'Therapeutic spa treatment to nourish the scalp and strengthen hair roots.'
      }
    ],
    'men-skin': [
      {
        title: 'De-Tan Facial Clean-Up',
        image: 'https://placehold.co/400x300/d4a373/2c1e1c?text=MEN+DETAN',
        description: 'Targeted treatment to remove sun damage and restore even skin tone.'
      },
      {
        title: 'Sport Pedicure',
        image: 'https://placehold.co/400x300/f9f5f1/2c1e1c?text=PEDICURE',
        description: 'Deep cleansing and relaxation for feet, designed for the active individual.'
      },
      {
        title: 'Basic Refresh Facial',
        image: 'https://placehold.co/400x300/a38060/f9f5f1?text=FACIAL+CLEANUP',
        description: 'Quick, deep-pore cleansing and moisturizing for instant skin revitalization.'
      }
    ],
    'men-makeup': [
      {
        title: 'The AARA Groom Package',
        image: 'https://placehold.co/400x300/2c1e1c/f9f5f1?text=GROOM+MAKEUP',
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
            <i className="fas fa-venus"></i> Women's Services
          </button>
          <button
            className={`tab-button ${activeCategory === 'men' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('men')}
          >
            <i className="fas fa-mars"></i> Men's Services
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
                Men's Skin Care
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

        <p className="section-note">
          *Prices are starting rates and may vary based on hair length, product usage, and stylist level.
        </p>
      </section>
    </>
  )
}

export default Services
