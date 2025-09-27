import banner1 from '../../img/banner/banner1.jpg';
import banner2 from '../../img/banner/banner2.jpg';
import banner3 from '../../img/banner/banner3.jpg';
import { useState } from "react";

const banners = [banner1, banner2, banner3];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % banners.length);
  const prevSlide = () => setCurrent((current - 1 + banners.length) % banners.length);

  return (
    <div className="relative w-full h-auto overflow-hidden">
      <img
        src={banners[current]}
        alt={`Banner ${current + 1}`}
        className="object-cover transition-all duration-500 !w-full !h-full"
      />

      <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded-full">
      «
      </button>
      <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded-full">
      »
      </button>
    </div>
  );
}
