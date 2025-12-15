import "./styles/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <h1 className="home-title">Welcome to Moral Stories</h1>

        <p className="home-description">
          Discover a curated collection of timeless moral stories that inspire
          honesty, kindness, wisdom, and self-reflection.
        </p>

        <div className="home-card">
          <h3 className="home-card-title">Why Moral Stories?</h3>
          <p className="home-card-text">
            Moral stories help us understand life values through simple
            narratives. They are easy to read, meaningful, and relevant for all
            ages.
          </p>
        </div>

        <div className="home-card">
          <h3 className="home-card-title">What You’ll Find Here</h3>
          <ul className="home-list">
            <li>Short and meaningful stories</li>
            <li>Clear moral lessons</li>
            <li>Easy and calm reading experience</li>
            <li>Stories for all age groups</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
