export const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOU DESERVE THE BEST FOOD</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          quibusdam exercitationem maxime recusandae sit labore vero
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="brand-icons">
          <img src="/images/amazon.png" alt="amazon-logo" />
          <img src="/images/flipkart.png" alt="flipkart-logo" />
        </div>
      </div>
      <div className="box-lunch">
        <img src="/images/box_lunch.png" alt="" />
      </div>
    </main>
  );
};
