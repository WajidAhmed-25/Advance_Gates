
// import React, { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// export default function Main_Slider() {
//   const slides = [
//     {
//       id: 1,
//       title: "Venice",
//       date: "SA 16.05",
//       price: "1003$",
//       oldPrice: "1200$",
//       discount: "20%",
//       description: "01 Stop. On the Way, 2h 50mins. One way.",
//       imageUrl: "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
//     },
//     {
//       id: 2,
//       title: "Washington",
//       date: "FR 10.07",
//       price: "1999$",
//       oldPrice: "2500$",
//       discount: "20%",
//       description: "Non-stop. Direct flight. Round trip.",
//       imageUrl: "https://images.pexels.com/photos/2606395/pexels-photo-2606395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
//     },
//     {
//       id: 3,
//       title: "Province of Como",
//       date: "MO 20.09",
//       price: "1705$",
//       oldPrice: "2100$",
//       discount: "20%",
//       description: "02 Stops. On the Way, 3h 20mins. One way.",
//       imageUrl: "https://images.pexels.com/photos/23719842/pexels-photo-23719842/free-photo-of-kanal-w-wenecji.jpeg?auto=compress&cs=tinysrgb&w=600", 
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   // Autoplay functionality using useEffect
//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000); // Change slides every 3 seconds
//     return () => clearInterval(interval); // Clean up the interval on unmount
//   }, []);

//   return (
//     <div className="w-full bg-green-400">
//       <h1 className="mb-6 text-3xl font-bold text-center">Destination Gallery</h1>

//       <div className="relative w-full h-[500px] flex justify-center items-center overflow-hidden">
//         {slides.map((slide, index) => {
//           const isCurrentSlide = index === currentSlide;
//           const isPreviousSlide = index === (currentSlide - 1 + slides.length) % slides.length;
//           const isNextSlide = index === (currentSlide + 1) % slides.length;

//           let positionClass = "translate-x-[100%]";
//           if (isCurrentSlide) positionClass = "translate-x-[0%] scale-[1.15] z-20 -mx-8 ";
//           else if (isPreviousSlide) positionClass = "translate-x-[-60%] scale-[0.9] z-10";
//           else if (isNextSlide) positionClass = "translate-x-[60%] scale-[0.9] z-10";

//           return (
//             <div
//               key={slide.id}
//               className={`absolute transition-all duration-700 ease-in-out ${positionClass}`}
//             >
//               <div
//                 className="w-[40vw] h-[400px] bg-cover bg-center rounded-xl shadow-lg flex flex-col justify-between p-8 shadow-xl"
//                 style={{ backgroundImage: `url(${slide.imageUrl})` }}
//               >
//                 <div className="flex justify-end">
//                   <span className="bg-red-600 text-white text-xs sm:text-sm px-2 py-1 rounded">
//                     {slide.discount}
//                   </span>
//                 </div>
//                 <div>
//                   <h2 className="text-xl sm:text-2xl md:text-4xl text-white font-bold">{slide.title}</h2>
//                   <span className="block bg-blue-600 text-white text-xs sm:text-sm px-2 py-1 rounded inline-block my-2">
//                     {slide.date}
//                   </span>
//                   <div className="text-white">
//                     <span className="line-through text-red-400 text-sm sm:text-base md:text-lg">{slide.oldPrice}</span>
//                     <span className="text-lg sm:text-xl md:text-2xl font-bold"> {slide.price}</span>
//                   </div>
//                   <p className="text-white text-sm sm:text-base md:text-lg">{slide.description}</p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//         <button
//           className="absolute left-4 text-blue-600 text-3xl z-30"
//           onClick={prevSlide}
//         >
//           <FaArrowLeft />
//         </button>
//         <button
//           className="absolute right-4 text-blue-600 text-3xl z-30"
//           onClick={nextSlide}
//         >
//           <FaArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// }







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Main_Slider() {
  const slides = [
    {
      id: 1,
      title: "Venice",
      date: "SA 16.05",
      price: "1003$",
      oldPrice: "1200$",
      discount: "20%",
      description: "01 Stop. On the Way, 2h 50mins. One way.",
      imageUrl: "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Washington",
      date: "FR 10.07",
      price: "1999$",
      oldPrice: "2500$",
      discount: "20%",
      description: "Non-stop. Direct flight. Round trip.",
      imageUrl: "https://images.pexels.com/photos/2606395/pexels-photo-2606395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Province of Como",
      date: "MO 20.09",
      price: "1705$",
      oldPrice: "2100$",
      discount: "20%",
      description: "02 Stops. On the Way, 3h 20mins. One way.",
      imageUrl: "https://images.pexels.com/photos/23719842/pexels-photo-23719842/free-photo-of-kanal-w-wenecji.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Autoplay functionality using useEffect
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full  pt-2">


  <h2 className="pb-2 mt-16 text-4xl font-bold text-center">Destination Gallery</h2>
  <div class="w-[300px] h-1 mx-auto mt-2 mb-4  bg-blue-600/70"></div>

  <p className="text-lg text-center text-gray-600  mb-8">These popular destinations have a lot to offer</p>

      <div className="relative w-full h-[500px] flex justify-center items-center overflow-hidden">
        {slides.map((slide, index) => {
          const isCurrentSlide = index === currentSlide;
          const isPreviousSlide = index === (currentSlide - 1 + slides.length) % slides.length;
          const isNextSlide = index === (currentSlide + 1) % slides.length;

          let positionClass = "translate-x-[100%]";
          let blurClass = "blur-sm";

          if (isCurrentSlide) {
            positionClass = "translate-x-[0%] scale-[1.15] z-20 -mx-8";
            blurClass = "blur-none"; // Remove blur for the current slide
          } else if (isPreviousSlide) {
            positionClass = "translate-x-[-60%] scale-[0.9] z-10";
          } else if (isNextSlide) {
            positionClass = "translate-x-[60%] scale-[0.9] z-10";
          }

          return (
            <div
              key={slide.id}
              className={`absolute transition-all duration-700 ease-in-out ${positionClass}`}
            >
              <div
                className={`w-[40vw] h-[400px] bg-cover bg-center rounded-xl shadow-lg flex flex-col justify-between p-8 shadow-xl transition-all duration-500 ease-in-out hover:blur-none ${blurClass}`}
                style={{ backgroundImage: `url(${slide.imageUrl})` }}
              >
                <div className="flex justify-end">
                  <span className="bg-red-600 text-white text-xs sm:text-sm px-2 py-1 rounded">
                    {slide.discount}
                  </span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-4xl text-white font-bold" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>{slide.title}</h2>
                  <span className="block bg-blue-600 text-white text-xs sm:text-sm px-2 py-1 rounded inline-block my-2">
                    {slide.date}
                  </span>
                  <div className="text-white">
                    <span className="line-through text-red-400 text-sm sm:text-base md:text-lg" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>{slide.oldPrice}</span>
                    <span className="text-lg sm:text-xl md:text-2xl font-bold" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}> {slide.price}</span>
                  </div>
                  <p className="text-white text-sm sm:text-base md:text-lg" style={{ textShadow: '3px 3px 3px rgba(0, 0, 0, 0.8)' }}>{slide.description}</p>
                </div>
              </div>
            </div>
          );
        })}
        <button
          className="absolute left-4 text-blue-600 text-3xl z-30"
          onClick={prevSlide}
        >
          <FaArrowLeft />
        </button>
        <button
          className="absolute right-4 text-blue-600 text-3xl z-30"
          onClick={nextSlide}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
