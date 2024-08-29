function Biography({ imageUrl }) {
  return (
    <div className="container biography">
      Biography
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
          commodi alias sint nulla ullam saepe facere reiciendis? Quo labore
          ipsum officia quidem nihil quae, alias rerum, minus voluptas vero
          delectus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
          cumque.
        </p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quaerat
          quas atque reprehenderit accusamus dolore sit repellat dolores error
          possimus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          architecto cupiditate illum aut fugiat facere ipsam libero, sit
          aliquid repellendus perspiciatis at, iure doloremque eveniet odit.
          Voluptatum excepturi impedit nostrum ullam sed pariatur, dicta
          dolorum? Laboriosam ex iusto a et placeat.
        </p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
}
export default Biography;
