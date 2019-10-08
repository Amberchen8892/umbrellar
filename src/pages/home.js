import React, { Component } from "react";

import Carousel from "react-bootstrap/Carousel";

import ReactHtmlParser from "react-html-parser";

// const html = `<p>It\u2019s really amazing how much change actually goes on inside your uterus during the nine months that you\u2019re carrying Baby. From the moment sperm meets egg, Baby\u2019s adult eye color is predetermined by her genes. However, her gorgeous irises won\u2019t reach their big kid hue until she\u2019s at least nine months old, so you may get to see Baby with a radically different eye color than the one she will end up with!</p><h3>Eyes in your womb</h3><p>Once your egg is fertilized, Baby has a genetically predetermined eye color, even though she doesn\u2019t even have eyes yet! Her eyes will be fully formed around week 22, but she still won\u2019t have any pigmentation (color) in her iris until a bit later on, and it may not be her true color until at least nine months after birth, as the iris needs sunlight to stimulate melanin production.</p><p>Melanin is responsible for coloring the hair and eyes, and the more melanin there is, the darker the color. Blue eyes have the least amount of melanin, followed by green, then hazel, and then brown. Most Caucasian babies will have blue or steel-colored eyes following delivery, as there is not yet enough melanin built up to turn her eyes their true shade, while babies of African or Asian descent may have a darker eye color to begin with.</p>`;
class Home extends Component {
  render() {
    return (
      <div>
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/land1.jpg"
              alt="First slide"
              height=" 600px"
            />
            <Carousel.Caption>
              
              <p >A baby is something you carry inside you for nine months, in your arms for three years, and in your heart until the day you die.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/land2.jpg"
              height=" 600px"
              alt="Third slide"
            />

            <Carousel.Caption>
              
              <p>A daughter is one of the most beautiful gifts this world has to give.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/land3.jpeg"
              height=" 600px"
              alt="Third slide"
            />

            <Carousel.Caption>
              
              <p style={{color:"rgb(245, 71, 115)", fontSize:"26px"}}>
              A baby fills a place in your heart that you never knew was empty.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div style={{display:'flex', justifyContent:"center", marginTop:"50px"}}>
        <div className="jumbotron home-page" >
        <h1 className="display-4" style={{fontFamily: `'Pacifico',serif`, color:"#0091ea"}}>Umbrella</h1>
        <p className="lead" style={{fontFamily: `'Lora',serif`, color:"#3e2723"}}>"Umbrella is the go-to place for sharing birth stories, as well as pregnancy and postpartum struggles and triumphs. It was born out of the knowledge that new and expecting mothers love hearing birth stories and for most moms, sharing a birth story is a positive way to connect with other women." </p>
        <hr className="my-4" />
        <p> We are always with you.</p>
       
      </div>
        </div>
       
        <div style={{display:'flex', flexWrap:"wrap", justifyContent:"center"}}>
        <div className="cards"style={{ marginTop: "50px", marginBottom:"50px", marginRight:"30px" }}>
          <div className="card" style={{ width: "18rem" }}>
            <img src="/images/front1.jpeg" className="card-img-top" alt="..." ></img>
            <div className="card-body">
              <h5 className="card-title">Tracking</h5>
              <p className="card-text">
                Track baby and body developments in our week by week calendar. Each week, you can see how the baby grows in your womb, also how your body change to support the baby.
              </p>
              
            </div>
          </div>
        </div>
        <div className="cards"style={{ marginTop: "50px", marginBottom:"50px" ,  marginRight:"30px"}}>
          <div className="card" style={{ width: "18rem" }}>
            <img src="/images/front2.jpeg" className="card-img-top" alt="..." ></img>
            <div className="card-body">
              <h5 className="card-title">Learning</h5>
              <p className="card-text">
                Be prepared and ready for your next journey with us. You have access to all the latest and most trusted aritcles and problems that you will meet during your pregnancy.
              </p>
              
              
            </div>
          </div>
        </div>
        <div className="cards"style={{ marginTop: "50px", marginBottom:"50px" }}>
          <div className="card" style={{ width: "18rem" }}>
            <img src="/images/front3.jpeg" className="card-img-top" alt="..." ></img>
            <div className="card-body">
              <h5 className="card-title">Community</h5>
              <p className="card-text">
                Join our community where you can learn useful tip from other moms. And you also can share your story in the community. Besides, we together make our pregnant life be easier.
              </p>
              
            </div>
          </div>
        </div>
        </div>
        
        {/* <div>{ReactHtmlParser(html)}</div> */}
        <div
          classNAme="app-feature"
          style={{ backgroundColor: "#e0f7fa", padding: "50px" }}
        >
          <div className="row title">
            <h1 style={{fontFamily: 'Fjalla One'}}>Upcoming Events</h1>
          </div>
          <div
            class="row"
            style={{ marginRight: "100px", marginLeft: "100px" }}
          >
            <div class="col-12 col-md-8">
              <img
                src="/images/app.png"
                style={{ width: "100%", height: "500px", maxWidth: "500px" }}
              ></img>
            </div>
            <div className="col-6 col-md-4 text">
              <div>
                <h5 style={{fontFamily: `'Playfair Display',serif`}}>
                  Umbrella Health’s consumer products have helped more than 13
                  million women and families make important life and health
                  decisions. We will launch our apps in Dec 2019
                </h5>
                <ul>
                  <li>Umbrella prenancy on Dec 1st, 2019</li>
                  <li>Umbrella parenting on Dec 13st, 2019</li>
                  <li>Umbrella fertility on Dec 23st, 2019</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
