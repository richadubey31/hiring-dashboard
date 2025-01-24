import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import "./OurValues.css";

const valuesData = [
    {
      image: "/images/card1.png",
      title: "Mentorship That Sparks Growth",
      description:
        "The magic of mentorship isn't just about guidance; it's about sparking a fire within you, igniting your potential, and watching you grow alongside us, as we strive together towards shared aspirations. For us, mentorship isn't just a practice—it's a core value. Individuals who resonate with our passion for growth and recognize their potential within our shared vision thrive exceptionally within our environment.",
    },
    {
      image: "/images/card2.png",
      title: "Building a Fulfilling Life",
      description:
        "We're not just committed to building great software; we're committed to cultivating a fulfilling life for our team. With offices nestled in the serene hills of Tehri and Dwarahat and our very own organic farm in Hastinapur, we're creating a holistic environment where personal and professional growth go hand-in-hand. We believe that doing what's right—for our team, our community, and our planet—is the foundation for lasting success.",
    },
    {
      image: "/images/card3.png",
      title: "Relationships That Go Beyond Work",
      description:
        "We believe that building lasting relationships—with clients, colleagues, and the community—is at the heart of everything we do. We connect beyond the boundaries of our work, fostering trust, empathy, and mutual respect.",
    },
    {
      image: "/images/card4.png",
      title: "Joy in Togetherness",
      description:
        "We believe that shared moments of joy and camaraderie strengthen our bonds and create a supportive work environment. We celebrate our successes together, fostering a sense of belonging and mutual encouragement.",
    },
    {
      image: "/images/card5.png",
      title: "The Wisdom of Books",
      description:
        "Books are seen as integral to personal and professional development. The phrase 'We don't pick books, books find us' suggests our belief that learning is a serendipitous and ongoing process. Books enrich us with insights, helping us grow individually and as a team.",
    },
    {
      image: "/images/card6.jpg",
      title: "Gratitude and Community Giving",
      description:
        "We cherish connections that ground us and inspire us to give back to the communities that nurtured our growth. Fostering a sense of gratitude and purpose, we are committed to creating a positive impact beyond our organization.",
    },
    {
      image: "/images/card7.png",
      title: "Being Remarkable",
      description:
        "Inspired by the concept of the Purple Cow, we at ColoredCow strive to be remarkable in all we do. Whether it's in the software we build or the way we approach challenges, we aim to create something that stands out and leaves a lasting impression.",
    },
    {
      image: "/images/card8.jpg",
      title: "Empathy in Problem-Solving",
      description:
        " We value empathy as the cornerstone of problem-solving. By centering our solutions around the needs of our clients and their communities, we build products that connect at a human level, creating meaningful and impactful outcomes.",
    },
    {
      image: "/images/card9.jpg",
      title: "Data-Driven Decisions",
      description:
        "We believe in the power of data to guide our actions. We focus on providing exact solutions by analyzing insights and making informed decisions. Every product and service is crafted with purpose, using data to align with the specific goals and outcomes of our clients.",
    },
    {
      image: "/images/card10.jpg",
      title: "Continuous Learning and Innovation",
      description:
        "We believe in staying ahead of the curve through continuous learning and innovation. By integrating modern tools, methodologies, and frameworks, we ensure our solutions are both cutting-edge and reliable.",
    },
    {
      image: "/images/card11.png",
      title: "Integrity in Action",
      description:
        "Doing the right thing is a fundamental value at ColoredCow. Integrity guides every decision we make, ensuring that our actions align with our commitments to our clients, team, and the environment.",
    },
  ];
  

const OurValues = () => {
    const sliderRef = useRef(null);
    const [ref, inView] = useInView({
      threshold: 0.2,
      triggerOnce: true,
    });
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      centerMode: true,
    centerPadding: '100px', 
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
      <div className="our-values" ref={ref}>
        <div class="nine">
         <h2>Our Values<span>Core principles that define us</span></h2></div>
        <Slider ref={sliderRef} {...settings}>
          {valuesData.map((value, index) => (
            <div key={index} className="value-card">
              <div className="card-content">
                <img src={value.image} alt={value.title} className="card-image" />
                <div className="card-title">
                  <h3>{value.title}</h3>
                </div>
                <div className="card-text">
                  <p>{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
export default OurValues;
