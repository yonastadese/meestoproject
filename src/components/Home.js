import Counter from "./Counter";

const homeData = {
  title:"Discover your home, you'll love tolive.",
subtitle:"Let’s find a home that’s perfect for your future"
};

const Home = () => {
  return (
    <div className="devman_tm_section" id="home">
      <div className="devman_tm_hero">
        <div className="background">
          <div className="image" data-img-url="img/hero/1.png" />
        </div>
        <div className="container">
          <div className="content">
            <div className="left">
              <div className="inner">
                <h3 className="name">
                  {homeData.title}
                </h3>
                <h5>
                {homeData.subtitle}
                </h5>
               
                <div className="buttons">
                  <div className="devman_tm_button">
                    <a className="anchor" href="#contact">
                      Contact us
                    </a>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
