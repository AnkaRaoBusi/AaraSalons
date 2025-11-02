import { useParams, Link } from 'react-router-dom'
import hero1 from '../assets/images/hero1.png'
import hero2 from '../assets/images/hero2.jpg'
import hero3 from '../assets/images/hero3.jpg'

const POSTS = [
  {
    id: '1',
    title: 'Summer Hair Care: Prepping Your Hair for Sun & Sea',
    date: 'June 5, 2025',
    category: 'Hair',
    image: hero1,
    content:
      'We recommend a pre-swim barrier, weekly deep conditioning, and a cut that removes damaged ends. Use UV protectant sprays and rinse with fresh water after exposure.'
  },
  {
    id: '2',
    title: 'Glow From Within: At-Home Facial Tips Between Salon Visits',
    date: 'August 12, 2025',
    category: 'Skin',
    image: hero2,
    content:
      'Start with a double-cleanse, gentle exfoliation, targeted mask, and a nourishing serum followed by SPF in the morning.'
  },
  {
    id: '3',
    title: 'Bridal Beauty Timeline: When to Book Trials & Treatments',
    date: 'September 2, 2025',
    category: 'Makeup',
    image: hero3,
    content:
      'Start skin prep 6 months ahead with facials and home care; schedule makeup and hair trials 6-8 weeks before the wedding and a final touch-up 2 weeks prior.'
  }
]

const BlogPost = () => {
  const { id } = useParams()
  const post = POSTS.find((p) => p.id === id)

  if (!post) {
    return (
      <section className="section">
        <h2 className="section-title">Post not found</h2>
        <p>We couldn&apos;t find the post you&apos;re looking for.</p>
        <Link to="/blog" className="cta-button">Back to Blog</Link>
      </section>
    )
  }

  return (
    <>
      <header className="services-header" style={{ backgroundImage: `url(${post.image})`, height: '40vh' }}>
        <div className="header-overlay">
          <div className="header-content">
            <h1 className="main-headline">{post.title}</h1>
            <p className="tagline">{post.category} | {post.date} • {post.readTime || '5 min read'}</p>
          </div>
        </div>
      </header>

      <section className="section">
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'left' }}>
          <article style={{ backgroundColor: 'var(--color-background-light)', padding: 24, borderRadius: 12 }}>
            <p style={{ color: 'rgba(44,30,28,0.9)', marginBottom: 12 }}>{post.content.split('\n\n')[0]}</p>
            {post.content.split('\n\n').slice(1).map((para, i) => (
              <p key={i} style={{ color: 'rgba(44,30,28,0.85)', marginBottom: 12 }}>{para}</p>
            ))}
            <div style={{ marginTop: 20 }}>
              <Link to="/blog" className="nav-cta">Back to Blog</Link>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default BlogPost
