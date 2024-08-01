import React from "react";
import "./Home.css";
import img2 from "./Images/liquidity.png";
import img3 from "./Images/hero-bg.png";
import img5 from "./Images/s1.png";
import img6 from "./Images/s2.png";
import img7 from "./Images/s3.png";
import img8 from "./Images/about-img.png";
import img9 from "./Images/w1.png";
import img10 from "./Images/w2.png";
import img11 from "./Images/w3.png";
import img12 from "./Images/w4.png";
import img13 from "./Images/Sanskruti_img.jpg";
import img14 from "./Images/Trupti_img.jpg";
import img15 from "./Images/Isha_img.jpg";
import img16 from "./Images/Shlok_img.jpg";
import img17 from "./Images/money.jpg";
import img19 from "./Images/market.png";
import img20 from "./Images/bull_and_bear-.png";
import img21 from "./Images/d3.webp";
import img22 from "./Images/failure.jpg";
import img23 from "./Images/winner.jpg";
import img24 from "./Images/discipline.jpg";
import { AiOutlineUser } from "react-icons/ai";
import Footor from "./Footor";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";

const Home = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="hero_area">
        <div className="hero_bg_box">
          <div className="bg_img_box">
            <img src={img3} alt="hero_bag" />
          </div>
        </div>
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <Link className="navbar-brand">
                <div style={{ top: "6px", left: "0" }}>
                  <img src={img2} width="175.15" height="70" style={{verticalAlign: "middle",display: "block",marginTop: "115",padding: "0"}} alt="nav_img" />
                </div>
              </Link>

              {/*
              <a className="navbar-brand">
                <div style={{ top: "6px", left: "0" }}>
                  <img src={img2} width="175.15" height="70"
                    style={{
                      verticalAlign: "middle",
                      display: "block",
                      marginTop: "115",
                      padding: "0",
                    }} alt="nav_img" />
                </div>
              </a>
              */}

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""> </span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <Link to="/" className="nav-link" onClick={() => scrollToSection('our_home')}>Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={() => scrollToSection('about_us')}>{" "}About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={() => scrollToSection('our_servises')}>Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={() => scrollToSection('why_us')}>Why Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={() => scrollToSection('our_team')}>Team</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link"> <AiOutlineUser /> Login </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>

        <section className="slider_section" id="our_home">
          <div>
            <Carousel>
              <Carousel.Item>
                <div>
                  <div className="carousel-item active">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="detail-box">
                            <h1>
                              Liquidity
                            </h1>
                            <p>
                              An asset can be bought or sold in the market without significantly affecting its price. 
                              It's a crucial concept for traders because higher liquidity generally means lower transaction 
                              costs (such as bid-ask spreads) and lower price volatility.
                              Determines the efficiency and stability of financial markets. Traders often prioritize trading
                              assets with high liquidity to minimize costs and risks associated with their trading activities.<br />
                              Traders rely on liquidity to enter and exit positions efficiently, especially in volatile markets. 
                              It allows them to manage risk more effectively by quickly adjusting their positions as market conditions change.
                            </p>

                            {/*
                            <div className="btn-box">
                              <a href="" className="btn1">
                                Read More
                              </a>
                            </div>
                           */}

                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="img-box">
                            <img src={img19} style={{ width: "127%" }} alt="market_img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div>
                  <div className="carousel-item active">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="detail-box">
                            <h1>
                              Bulls & bears
                            </h1>
                            <p>
                              "Bulls" and "Bears" are terms used in financial markets, particularly in stock trading, 
                              to describe two opposing perspectives on market direction: bullish and bearish.
                              A "bull" or "bullish" investor/trader believes that the market or a specific asset's
                              price will rise in the future.
                              A "bear" or "bearish" investor/trader believes that the market or a specific asset's 
                              price will fall in the future.<br />
                              The terms "bull" and "bear" originated from the ways these animals attack their opponents. 
                              A bull thrusts its horns upward (symbolizing a rising market), while a bear swipes its claws 
                              downward (symbolizing a declining market).
                            </p>

                            {/*
                            <div className="btn-box">
                              <a href="" className="btn1">
                                Read More
                              </a>
                            </div>
                           */}

                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="img-box">
                            <img src={img20} style={{ width: "127%" }} alt="bullandbear_img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div>
                  <div className="carousel-item active">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="detail-box">
                            <h1>
                              Technical analysis<br />
                            </h1>
                            <p>
                              Technical analysis is a method used by traders and investors to evaluate securities and forecast
                              future price movements based on historical market data, primarily price and volume. Unlike fundamental 
                              analysis, which focuses on examining a company's financial statements and economic indicators, technical 
                              analysis relies on charts and patterns to make trading decisions. <br />
                              Technical analysts identify recurring patterns and formations on price charts, such as triangles, flags, head 
                              and shoulders, and trendlines. These patterns are believed to reflect underlying market psychology and can help predict future price movements. 
                              For example, a breakout above a resistance level or a reversal pattern might signal a potential buying or selling opportunity.
                              It is a valuable tool for traders and investors to analyze market trends, identify potential entry and exit points, and manage risk. 
                              However, it's essential to recognize its limitations and integrate it with other forms of analysis, such as fundamental analysis and 
                              risk management techniques, to make informed trading decisions.
                            </p>

                           {/*
                            <div className="btn-box">
                              <a href="" className="btn1">
                                Read More
                              </a>
                            </div>
                           */}

                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="img-box">
                            <img src={img21} alt="d2_img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </section>
      </div>

      <section className="service_section layout_padding" id="our_servises">
        <div className="service_container">
          <div className="container ">
            <div className="heading_container heading_center">
              <h2>
                Our <span>Services</span>
              </h2>
              <p>
                Securities encompass various financial instruments such as stocks, bonds, options, and commodities, representing ownership, 
                debt, or rights to assets, traded in financial markets to raise capital or manage risk.
              </p>
            </div>
            <div className="row">
              <div className="col-md-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src={img5} alt="s1" />
                  </div>
                  <div className="detail-box">
                    <h5>Support for opening account</h5>
                    <p>
                      Brokers offer support services to assist clients with opening accounts, 
                      guiding them through the account setup process, providing information about 
                      account types and requirements and concerns. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src={img6} alt="s2" />
                  </div>
                  <div className="detail-box">
                    <h5>Security</h5>
                    <p>
                      Brokers provide access to a wide range of securities, 
                      including stocks, bonds, options, futures, currencies, 
                      and commodities, enabling clients to buy and sell these 
                      financial instruments in various markets to meet their investment objectives.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src={img7} alt="s3" />
                  </div>
                  <div className="detail-box">
                    <h5>TRADE EXEXUTION</h5>
                    <p>
                      Trade execution is the service provided by brokers where they 
                      facilitate the buying and selling of financial instruments on 
                      behalf of their clients in various markets, ensuring that orders 
                      are executed accurately and efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*
            <div className="btn-box">
              <a href="">View All</a>
            </div>
            */}

          </div>
        </div>
      </section>

      <section className="about_section layout_padding" id="about_us">
        <div className="container  ">
          <div className="heading_container heading_center">
            <h2>
              About <span>Us</span>
            </h2>
            <p>
              Welcome to Liquidity, where expertise meets integrity in the world of finance.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 ">
              <div className="img-box">
                <img src={img8} alt="about_1img" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h3>We Are Liquidity</h3>
                <p>
                  At Liquidity, we believe in empowering our clients to achieve their financial goals 
                  with confidence. With a legacy of excellence spanning we have established ourselves 
                  as a trusted partner in the financial industry.
                  Our team of seasoned professionals brings a wealth of experience and a commitment to excellence 
                  in every transaction. We pride ourselves on providing personalized service tailored to meet the 
                  unique needs of each client.
                  Driven by a passion for success and guided by unwavering ethics, 
                  we strive to deliver superior results with every trade. Transparency, trust, and 
                  integrity are at the heart of everything we do.
                </p>
                <p>
                  Whether you're a seasoned investor or just starting on your financial journey, 
                  Liquidity is here to support you every step of the way. Discover the 
                  difference that expertise and dedication can make in achieving your financial 
                  aspirations.Join us at Liquidity and experience the confidence that 
                  comes from partnering with a team dedicated to your success.
                  Welcome to a new era of financial empowerment. Welcome to Liquidity.
                </p>
                {/*<a href="">Read More</a>*/}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why_section layout_padding" id="why_us">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Why Choose <span>Us</span>
            </h2>
          </div>
          <div className="why_container">
            <div className="box">
              <div className="img-box">
                <img src={img9} alt="w1" />
              </div>
              <div className="detail-box">
                <h5>Expert Management</h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis
                  cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                  laborum dolores quod nisi vitae voluptate ipsa? In tempore
                  voluptate ducimus officia id, aspernatur nihil. Tempore
                  laborum nesciunt ut veniam, nemo officia ullam repudiandae
                  repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={img10} alt="w2" />
              </div>
              <div className="detail-box">
                <h5>Secure Investment</h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis
                  cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                  laborum dolores quod nisi vitae voluptate ipsa? In tempore
                  voluptate ducimus officia id, aspernatur nihil. Tempore
                  laborum nesciunt ut veniam, nemo officia ullam repudiandae
                  repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={img11} alt="w3" />
              </div>
              <div className="detail-box">
                <h5>Instant Trading</h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis
                  cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                  laborum dolores quod nisi vitae voluptate ipsa? In tempore
                  voluptate ducimus officia id, aspernatur nihil. Tempore
                  laborum nesciunt ut veniam, nemo officia ullam repudiandae
                  repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={img12} alt="w4" />
              </div>
              <div className="detail-box">
                <h5>Happy Customers</h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis
                  cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                  laborum dolores quod nisi vitae voluptate ipsa? In tempore
                  voluptate ducimus officia id, aspernatur nihil. Tempore
                  laborum nesciunt ut veniam, nemo officia ullam repudiandae
                  repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            {/*<a href="">Read More</a>*/}
          </div>
        </div>
      </section>

      <section className="team_section layout_padding" id="our_team">
        <div className="container-fluid">
          <div className="heading_container heading_center">
            <h2 className="">
              Our <span> Team</span>
            </h2>
          </div>

          <div className="team_container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="box ">
                  <div className="img-box">
                    <img src={img13} className="img1" alt="team_1" />
                  </div>
                  <div className="detail-box">
                    <h5>Sanskruti Kunjir</h5>
                    <p>Frontend Developer</p>
                  </div>
                  {/* <div className="social_box">
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </div> */}
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box ">
                  <div className="img-box">
                    <img src={img14} className="img1" alt="team_2" />
                  </div>
                  <div className="detail-box">
                    <h5>Trupti Jadhav</h5>
                    <p>Database & Cloud Developer</p>
                  </div>
                  {/* <div className="social_box">
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </div> */}
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box ">
                  <div className="img-box">
                    <img src={img15} className="img1" alt="team_3" />
                  </div>
                  <div className="detail-box">
                    <h5>Isha Patil</h5>
                    <p>UI & UX Designer</p>
                  </div>
                  {/* <div className="social_box">
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </div> */}
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box ">
                  <div className="img-box">
                    <img src={img16} className="img1" alt="team_4" />
                  </div>
                  <div className="detail-box">
                    <h5>Shlok Shinde</h5>
                    <p>Backend Developer</p>
                  </div>
                  {/* <div className="social_box">
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2>
              Thinking <span>Space</span>
            </h2>
          </div>
          <div className="carousel-wrap ">
            <div className="owl-carousel client_owl-carousel">
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src={img24} alt="quote3" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      {/*<div className="client_info">
                        <h6>LusDen</h6>
                        <p>magna aliqua. Ut</p>
                      </div>*/}
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      The key to trading SUCCESS is EMOTIONAL DISCIPLINE{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src={img17} alt="quote3" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      {/*<div className="client_info">
                        <h6>LusDen</h6>
                        <p>magna aliqua. Ut</p>
                      </div>*/}
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      The stock market is a device for transfering money from 
                      the IMPETIENT to PATIENT{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src={img23} alt="quote3" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      {/*<div className="client_info">
                        <h6>LusDen</h6>
                        <p>magna aliqua. Ut</p>
                      </div>*/}
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      The GOAL of successful trader is to make the  BEST TRADES,
                      MONEY is secondary{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src={img22} alt="quote3" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      {/*<div className="client_info">
                        <h6>LusDen</h6>
                        <p>magna aliqua. Ut</p>
                      </div>*/}
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      If you can LEARN TO CREATE a state of mind that is not affected 
                      by the market's behaviour
                      the STRUGGLE will cease to EXSIST{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footor />
    </div>
  );
};

export default Home;
