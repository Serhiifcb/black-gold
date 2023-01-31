import React, { Component } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"
import '../../index.css'

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red"}}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
  
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green"}}
//       onClick={onClick}
//     />
//   );
// }

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
  render() {
    const settings = {
      // customPaging: function(i) {
      //   return (
      //     <button>{i + 1}</button>
      //     // <a>
      //       // <img src={`./images/pizza${i+1}.png`} alt='food' />
      //     // </a>
      //   );
      // },
      // fade: true,
      // centerMode: true,
      // centerMode: true,
      dots: false,
      // dotsClass: "slick-dots slick-thumb",
      infinite: false,
      speed: 10,
      slidesToShow: 1,
      slidesToScroll: 1,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />
    };
    const settingsSmall = {
      // customPaging: function(i) {
      //   return (
      //     <button>{i + 1}</button>
      //     // <a>
      //       // <img src={`./images/pizza${i+1}.png`} alt='food' />
      //     // </a>
      //   );
      // },
      // fade: true,
      // centerMode: true,
      // centerMode: true,
      // centerMode: true,
      dots: false,
      arrows: false,
      // dotsClass: "slick-dots slick-thumb",
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />
    };
    return (
      <>
        <Slider
          style={{marginBottom: '20px'}}
          {...settings}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}>
          <div className="bigPage">
            <img src={"./images/gallery1.jpg"} alt='food' />
          </div>
          <div className="bigPage">
            <img src={"./images/gallery2.jpg"} alt='food' />
          </div>
          <div className="bigPage">
            <img src={"./images/gallery3.jpg"} alt='food' />
          </div>
          <div className="bigPage">
            <img src={"./images/gallery4.jpg"} alt='food' />
          </div>
        </Slider>
        <Slider {...settingsSmall}
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
        >
          <div className="smallPage" style={{gap: '20px'}}>
            <img src={"./images/gallery1.jpg"} alt='gallery1' />
          </div>
          <div className="smallPage">
            <img src={"./images/gallery2.jpg"} alt='gallery2' />
          </div >
          <div className="smallPage">
            <img src={"./images/gallery3.jpg"} alt='gallery3' />
          </div>
          <div className="smallPage">
            <img src={"./images/gallery4.jpg"} alt='gallery4' />
          </div>
        </Slider>
      </>
    );
  }
}