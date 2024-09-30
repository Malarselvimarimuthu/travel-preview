import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import backgroundImage from '../../assets/panorama-2117310.jpg';
import goaAirportImg from '../../assets/airport.jpg';
import candolimHotelImg from '../../assets/candolim hotel.jpg';
import fishermansWharfImg from '../../assets/fishermans.jpg';
import candolimBeachImg from '../../assets/candolim beach.jpg';
import curliesImg from '../../assets/shiva_valley.jpg';
import oldGoaImg from '../../assets/Goa State Museum.jpg';
import panjimImg from '../../assets/panjim church.jpg';
import ritzClassicImg from '../../assets/ritz.jpg';
import candolimBeachAfternoonImg from '../../assets/candolim beach.jpg';
import donaPaula from '../../assets/Dona Paula viewpoint.jpg';
import beachShackImg from '../../assets/Joecons Beach Shack.jpg';
import goaAirportEveningImg from '../../assets/airport.jpg';

function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Itinerary data for the slides
  const itinerary = [
    {
      "venue": "Goa Airport (GOI)",
      "location": "Goa, India",
      "duration and time": "10:00 AM (June 16th)",
      "weather": "null",
      "message": "Welcome to Goa! Get ready for an adventure-filled trip. Upon arrival, consider renting a scooter for easy navigation and a true sense of freedom as you explore the coastal roads.",
      "background": goaAirportImg
    },
    {
      "venue": "Hotel in Candolim",
      "location": "Candolim, Goa, India",
      "duration and time": "11:00 AM (June 16th)",
      "weather": "null",
      "message": "Candolim is a great choice! Once settled, walk towards the quieter, northern end of the beach for a more secluded experience and stunning views.",
      "background": candolimHotelImg
    },
    {
      "venue": "Fisherman's Wharf",
      "location": "Candolim, Goa, India",
      "duration and time": "12:00 PM (June 16th)",
      "weather": "null",
      "message": "Enjoy the fresh seafood and views! After lunch, consider taking a surfing lesson from one of the local surf schools - Candolim beach is known for its beginner-friendly waves.",
      "background":  fishermansWharfImg
    },
    {
      "venue": "Candolim Beach",
      "location": "Candolim, Goa, India",
      "duration and time": "Afternoon (June 16th)",
      "weather": "null",
      "message": "Beyond swimming, rent a jet ski or try parasailing for an adrenaline rush!",
      "background":  candolimBeachImg
    },
    {
      "venue": "Curlies or Shiva Valley",
      "location": "Candolim, Goa, India",
      "duration and time": "Evening (June 16th)",
      "weather": "null",
      "message": "These shacks are iconic! For a more off-the-beaten-path experience, ask locals about hidden beach parties or live music events happening that night.",
      "background":  curliesImg
    },
    {
      "venue": "The Fisherman's Wharf",
      "location": "Calangute, Goa, India",
      "duration and time": "Dinner (June 16th)",
      "weather": "null",
      "message": "After dinner, walk along the beach and check out the late-night markets for unique souvenirs.",
      "background":  fishermansWharfImg
    },
    {
      "venue": "Old Goa",
      "location": "Goa, India",
      "duration and time": "9:00 AM (June 17th)",
      "weather": "null",
      "message": "Rent a scooter and explore the backroads around Old Goa - you'll discover hidden churches and stunning views. Start early to avoid the crowds.",
      "background":  oldGoaImg
    },
    {
      "venue": "Panjim",
      "location": "Goa, India",
      "duration and time": "11:00 AM (June 17th)",
      "weather": "null",
      "message": "While in Panjim, consider taking a kayaking tour through the mangroves - it's a unique way to see the area's natural beauty.",
      "background":  panjimImg
    },
    {
      "venue": "Ritz Classic",
      "location": "Panjim, Goa, India",
      "duration and time": "1:00 PM (June 17th)",
      "weather": "null",
      "message": "The fish thali here is a must-try! For an adventurous culinary experience, seek out local food stalls and try street food like Ros Omelette or Choris Pao.",
      "background":  ritzClassicImg
    },
    {
      "venue": "Candolim beach",
      "location": "Candolim, Goa, India",
      "duration and time": "Afternoon (June 17th)",
      "weather": "null",
      "message": "One last chance to soak up the sun!",
      "background":  candolimBeachAfternoonImg
    },
    {
      "venue": "Goa State Museum or Dona Paula viewpoint",
      "location": "Goa, India",
      "duration and time": "Afternoon (June 17th)",
      "weather": "null",
      "message": "These spots offer a different perspective on Goa. If you're feeling adventurous, rent a motorbike and explore the less-traveled roads in the hills around Dona Paula for breathtaking views.",
      "background":  donaPaula
    },
    {
      "venue": "Beach shack",
      "location": "Goa, India",
      "duration and time": "5:00 PM (June 17th)",
      "weather": "null",
      "message": "As you watch the sunset, reflect on your adventure-filled trip and start planning your next Goa escape!",
      "background":  beachShackImg
    },
    {
      "venue": "Joecons Beach Shack",
      "location": "Calangute, Goa, India",
      "duration and time": "7:00 PM (June 17th)",
      "weather": "null",
      "message": "Enjoy the lively atmosphere and one last taste of Goan cuisine. Before heading to the airport, try some Feni, a local cashew liquor, for a true taste of Goa.",
      "background":  backgroundImage
    },
    {
      "venue": "Goa Airport",
      "location": "Goa, India",
      "duration and time": "Evening (June 17th)",
      "weather": "null",
      "message": "Safe travels! We hope you had an unforgettable Goan adventure.",
      "background":  goaAirportEveningImg
    }
  ];

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          // Here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          // Here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 2,
            itemsToScroll: 2,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {itinerary.map((slide, index) => (
          <div
            key={index}
            style={{
              width: 800,
              height: 850,
              borderRadius:16,
              backgroundImage: `url(${slide.background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              position: 'relative',
              color: 'white',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                padding: '10px',
                textAlign: 'left',
              }}
            >
              <h2>{slide.venue}</h2>
              <p>{slide.location}</p>
              <p>{slide['duration and time']}</p>
              <p>{slide.weather}</p>
              <p>{slide.message}</p>
            </div>
          </div>
        ))}
      </ReactSimplyCarousel>
    </div>
  );
}

export default ReactSimplyCarouselExample;
