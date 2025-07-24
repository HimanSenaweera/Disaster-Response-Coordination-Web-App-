import React, { useEffect, useState } from 'react';
import './Slideshow.css';

import img1 from '../../assets/dis1.jpg';
import img2 from '../../assets/dis2.jpg';
import img3 from '../../assets/dis3.jpg';
import img4 from '../../assets/dis4.jpeg';
import img5 from '../../assets/dis5.jpg';

const images = [img1, img2, img3, img4, img5];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds per image
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`slide-image ${i === index ? 'active' : ''}`}
          alt={`slide-${i}`}
        />
      ))}
    </div>
  );
}
