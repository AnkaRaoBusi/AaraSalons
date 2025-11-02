import { Link } from 'react-router-dom'
import hero1 from '../assets/images/hero1.png'
import hero2 from '../assets/images/hero2.jpg'
import hero3 from '../assets/images/hero3.jpg'

const Blog = () => {
  const posts = [
    {
      id: '1',
      title: 'Summer Hair Care: Prepping Your Hair for Sun & Sea',
      date: 'NOvember 03, 2025',
      category: 'Hair',
      image: hero1,
      author: 'AARA Experts',
      readTime: '4 min read',
      tags: ['care', 'summer', 'hair'],
      excerpt:
        'Sun, salt and chlorine are harsh on hair. This guide outlines pre-swim protection, weekly at-home care, professional treatments to book, and simple styling tips to keep hair healthy and shiny throughout summer.',
      content:
        `Summer is the season for sun, sea, and carefree days — but it can also be tough on your hair. Salt from sea water lifts the hair cuticle, chlorinated pools strip natural oils, and UV exposure weakens strands over time. To protect your hair without giving up summer fun, follow these practical steps.

Pre-swim barrier: Apply a leave-in conditioner or a thin oil layer before swimming to reduce water absorption. Rinse immediately after swimming with fresh water to remove salt or chlorine.

Weekly repair: Use a deep conditioning mask once a week. Look for ingredients like keratin, argan oil, and hyaluronic complexes which restore moisture and repair protein damage.

Professional treatments: Schedule a trimming every 8-12 weeks to remove split ends. Consider a salon keratin or bond-building treatment for heavily damaged hair.

Styling and protection: Use thermal protectants before heat styling and UV-protectant sprays when spending long hours outdoors. Avoid tight hairstyles that stress wet hair — let hair air-dry partly before tying it up.`
    },
    {
      id: '2',
      title: 'Glow From Within: At-Home Facial Tips Between Salon Visits',
      date: 'November 02, 2025',
      category: 'Skin',
      image: hero2,
      author: 'AARA Skincare Team',
      readTime: '5 min read',
      tags: ['skin', 'facial', 'routine'],
      excerpt:
        'With the right weekly routine and products matched to your skin type, you can maintain and even extend salon results.',
      content:
        `At-home facials are about consistency rather than complexity. This short routine will help maintain radiance between professional treatments.

1) Double cleanse: Start with an oil-based cleanser to remove makeup and sunscreen, followed by a gentle water-based cleanser to clear pores.

2) Exfoliate: Use a mild chemical exfoliant (AHA/BHA) 1–2 times per week to encourage cell turnover. Avoid over-exfoliation which can cause sensitization.

3) Masking: Choose a hydrating or clay mask depending on your skin needs. Apply weekly for 10–15 minutes.

4) Serum and moisturizer: Apply a targeted serum (vitamin C in the morning, retinoid at night for anti-aging) and finish with a moisturizer appropriate for your skin type.

5) Sun protection: Daily SPF is mandatory; reapply during prolonged sun exposure.`
    },
    {
      id: '3',
      title: 'Bridal Beauty Timeline: When to Book Trials & Treatments',
      date: 'November 02, 2025',
      category: 'Makeup',
      image: hero3,
      author: 'AARA Bridal Team',
      readTime: '6 min read',
      tags: ['bridal', 'makeup', 'timeline'],
      excerpt:
        'A clear timeline reduces stress. This guide covers skin prep, makeup trials, hair trials, and what to schedule in the weeks leading up to your wedding.',
      content:
        `Bridal preparation is as much about planning as pampering. Begin early and give your skin and hair the time they need to look their best.

6+ months out: Start a gentle skincare regimen and consult a dermatologist for any persistent concerns. Begin hair-strengthening treatments if needed.

3–4 months out: Book makeup and hairstylist trials. Bring photos, discuss looks, and allow time for adjustments.

2 weeks out: Final beauty appointment and a rehearsal where possible. Avoid any major treatments that could cause irritation within a month of the wedding.

On the day: Stay hydrated, eat light, and rely on your stylist and makeup artist to execute the plan you rehearsed.`
    }
  ]

  return (
    <>
      <header className="services-header" style={{ backgroundImage: `url(${hero2})`, height: '40vh' }}>
        <div className="header-overlay">
          <div className="header-content">
            <h1 className="main-headline">AARA Salon Blog</h1>
            <p className="tagline">Trends, Tips & Tutorials from Our Experts</p>
          </div>
        </div>
      </header>

      <section id="blog-posts" className="section">
        <h2 className="section-title">Latest in Beauty & Wellness</h2>
        <p className="tagline-dark">
          Stay informed with the secrets, science, and style delivered straight from our salon floor.
        </p>

        <div className="service-grid blog-container">
          {posts.map((post) => (
            <article key={post.id} className="service-card-detail blog-post-card">
              <img src={post.image} alt={post.title} className="service-image blog-image" />
              <div style={{ padding: 12, textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span className="post-meta" style={{ display: 'block' }}>
                    <i className="fas fa-tag" /> {post.category}
                  </span>
                  <small style={{ color: 'rgba(44,30,28,0.6)' }}>{post.date} • {post.readTime}</small>
                </div>
                <h4 style={{ marginTop: 0 }}>{post.title}</h4>
                <p style={{ color: 'rgba(44,30,28,0.85)' }}>{post.excerpt}</p>
                <div style={{ display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap' }}>
                  {post.tags.map((t) => (
                    <span key={t} style={{ background: 'var(--color-accent-pink)', color: 'var(--color-text-light)', padding: '4px 10px', borderRadius: 999, fontSize: 12 }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: 12 }}>
                  <Link to={`/blog/${post.id}`} className="nav-cta">Read Full Post</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Blog
