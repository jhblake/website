import ARTICLES from '../data/articles.js'

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
