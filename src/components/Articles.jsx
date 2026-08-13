const ARTICLES = [
  {
    title: 'Still Need Microsoft Project Desktop? Here\'s How I Run Project Server Without Managing the Infrastructure',
    date: 'August 2026',
    excerpt:
      'It\'s been a few years since I last worked with Microsoft Project Server, but my return wasn\'t driven by nostalgia or a missing feature.',
  },
  {
    title: 'Microsoft Planner Premium',
    date: 'August 2026',
    excerpt:
      ',
  },
]

export default function Articles() {
  return (
    <section id="articles" className="section articles">
      <div className="container">
        <p className="eyebrow eyebrow--center">Insights</p>
        <h2 className="section__heading">Articles</h2>
        <div className="articles__grid">
          {ARTICLES.map((article) => (
            <article key={article.title} className="article-card">
              <p className="article-card__date">{article.date}</p>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
