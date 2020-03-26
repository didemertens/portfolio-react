import React from 'react'

const MoreAbout = () => (
  <div className="about-text-more">
    <a href="https://www.goodreads.com/book/show/28256439-the-hidden-life-of-trees"
      target="_blank" rel="noopener noreferrer"
    >
      <div className="home-about-more-box about-book">
        <div className="about-book-text">
          <h3>Most eye-opening read</h3>
          <p>Did you know that trees form a complex community of parents and children?
          And that the parents actually care for their children by giving them nutrients and looking out for insects?
          I didn't either, untill I read Peter Wohlleben's book "The Hidden Life of Trees". In this book he shares all of
          this insights, which made me fall in love with trees.
      </p>
        </div>
      </div>
    </a>

    <a href="https://www.wikiart.org/en/tamara-de-lempicka/the-sleeper-1932"
      target="_blank" rel="noopener noreferrer"
    >
      <div className="home-about-more-box about-painting">
        <div className="about-painting-text">
          <h3>Most beautiful painting</h3>
          <p>I love Tamara de Lempicka's work. I even copied a couple of her paintings! She was a Polish artist who lived
          for most of her life in France and the US. She mainly created paintings of women in the Art Deco style.
          If I had to choose my favourite painting, it would be a tough choice but I'll go with "The Sleeper" because of the
        bold lines and calm colours.</p>
        </div>
      </div>
    </a>

    <a href="https://canals-amsterdam.nl/"
      target="_blank" rel="noopener noreferrer"
    >
      <div className="home-about-more-box about-canals">
        <div className="about-canals-text">
          <h3>Most inspiring website</h3>
          <p>My favourite website is Canals Amsterdam. Not because it's about the Netherlands (although I'm bound
          to be a bit baised), but because it shows the history of the canals in a very unique way. You can take
          a "scroll" from the 16th century to today, seeing through paintings and pictures how the canals were
        used during this time period.</p>
        </div>
      </div>
    </a>
  </div>
)

export default MoreAbout