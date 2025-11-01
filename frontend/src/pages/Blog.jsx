const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: '[CMS_IMAGE_URL]',
      category: '[CMS_CATEGORY]',
      date: '[CMS_DATE]',
      title: '[CMS_POST_TITLE]',
      excerpt: '[CMS_POST_EXCERPT]',
      url: '[CMS_POST_URL]'
    },
    {
      id: 2,
      image: '/images/placeholder-post-2.jpg',
      category: 'Hair',
      date: 'OCT 15, 2025',
      title: 'How to Choose the Right Shampoo for Your Scalp Type',
      excerpt: 'Understanding the difference between oily, dry, and balanced scalps is the first step to healthy hair.',
      url: '/post-detail-2'
    }
  ]

  return (
    <>
      <header className="blog-header">
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

        <div className="blog-container">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-post-card">
              {post.image.startsWith('[') ? (
                <img src={post.image} alt={`${post.title} cover image`} className="blog-image" />
              ) : (
                <img src={post.image} alt={post.title} className="blog-image" />
              )}
              <div className="card-content">
                <span className="post-meta">
                  <i className="fas fa-tag"></i> {post.category} | {post.date}
                </span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                {post.url.startsWith('[') ? (
                  <a href={post.url} className="read-more-link">
                    Read Full Post <i className="fas fa-arrow-right"></i>
                  </a>
                ) : (
                  <a href={post.url} className="read-more-link">
                    Read Full Post <i className="fas fa-arrow-right"></i>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Blog
