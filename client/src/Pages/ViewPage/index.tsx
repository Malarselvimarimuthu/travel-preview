import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Sample data for the slides
  const slides = [
    {
      background: '#ff80ed',
      text: 'Slide 0',
    },
    {
      background: '#065535',
      text: 'Slide 1',
    },
    {
      background: '#000000',
      text: 'Slide 2',
    },
    {
      background: '#133337',
      text: 'Slide 3',
    },
    {
      background: '#ffc0cb',
      text: 'Slide 4',
    },
    {
      background: '#ffffff',
      text: 'Slide 5',
    },
    {
      background: '#ffe4e1',
      text: 'Slide 6',
    },
    {
      background: '#008080',
      text: 'Slide 7',
    },
    {
      background: '#ff0000',
      text: 'Slide 8',
    },
    {
      background: '#e6e6fa',
      text: 'Slide 9',
    },
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
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              width: 600,
              height: 600,
              background: slide.background,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              position: 'relative',
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
              {slide.text}
            </div>
          </div>
        ))}
      </ReactSimplyCarousel>
    </div>
  );
}

export default ReactSimplyCarouselExample;



// export default ReactSimplyCarouselExample;

// import { useState, useEffect } from 'react';
// import ReactSimplyCarousel from 'react-simply-carousel';
// import axios from 'axios';

// interface ImageItem {
//   src: string;
//   alt: string;
//   captionTitle: string;
//   captionText: string;
// }

// const ReactSimplyCarouselExample = () => {
//   const [activeSlideIndex, setActiveSlideIndex] = useState(0);
//   const [carouselItems, setCarouselItems] = useState<ImageItem[]>([]);

//   useEffect(() => {
//     // Function to fetch images from the backend
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get('/api/images'); // Replace with your API endpoint
//         setCarouselItems(response.data);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };

//     fetchImages();
//   }, []);

//   return (
//     <div>
//       <ReactSimplyCarousel
//         activeSlideIndex={activeSlideIndex}
//         onRequestChange={setActiveSlideIndex}
//         itemsToShow={1}
//         itemsToScroll={1}
//         forwardBtnProps={{
//           style: {
//             alignSelf: 'center',
//             background: 'black',
//             border: 'none',
//             borderRadius: '50%',
//             color: 'white',
//             cursor: 'pointer',
//             fontSize: '20px',
//             height: 30,
//             lineHeight: 1,
//             textAlign: 'center',
//             width: 30,
//           },
//           children: <span>{`>`}</span>,
//         }}
//         backwardBtnProps={{
//           style: {
//             alignSelf: 'center',
//             background: 'black',
//             border: 'none',
//             borderRadius: '50%',
//             color: 'white',
//             cursor: 'pointer',
//             fontSize: '20px',
//             height: 30,
//             lineHeight: 1,
//             textAlign: 'center',
//             width: 30,
//           },
//           children: <span>{`<`}</span>,
//         }}
//         responsiveProps={[
//           {
//             itemsToShow: 2,
//             itemsToScroll: 2,
//             minWidth: 768,
//           },
//         ]}
//         speed={400}
//         easing="linear"
//       >
//         {carouselItems.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               width: 300,
//               height: 300,
//               backgroundImage: `url(${item.src})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'flex-end',
//               color: 'white',
//               padding: '20px',
//               boxSizing: 'border-box',
//             }}
//           >
//             <h5>{item.captionTitle}</h5>
//             <p>{item.captionText}</p>
//           </div>
//         ))}
//       </ReactSimplyCarousel>
//     </div>
//   );
// };

// export default ReactSimplyCarouselExample;
