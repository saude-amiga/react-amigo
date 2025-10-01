import banner1 from '../../img/banner/banner1.jpg';
import banner2 from '../../img/banner/banner2.jpg';
import banner3 from '../../img/banner/banner3.jpg';
import { useState, useEffect } from "react";

const banners = [
  { src: banner1, alt: "Um casal de idosos sentados no sofá, sorrindo e olhando juntos para um tablet. No canto superior esquerdo estão os logotipos do Hospital das Clínicas da FMUSP e do programa Saúde Amiga." },
  { src: banner2, alt: "Homem usando um laptop enquanto fala ao telefone. No canto superior esquerdo estão os logotipos do Hospital das Clínicas da FMUSP e do programa Saúde Amiga." },
  { src: banner3, alt: "Homem mais velho sentado no sofá,sorrindo e usando um tablet, No canto superior esquerdo estão os logotipos do Hospital das Clínicas da FMUSP e do programa Saúde Amiga." },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + banners.length) % banners.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-auto overflow-hidden">
      <img src={banners[current].src} alt={banners[current].alt}
        className="object-cover transition-all duration-500 !w-full !h-full"/>

      <button onClick={prevSlide} 
        className="absolute left-2 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded-full bg-white/70 hover:bg-white">
        «
      </button>
      <button onClick={nextSlide} 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded-full bg-white/70 hover:bg-white">
        »
      </button>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button key={index} onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-[#194737]" : "bg-gray-300"
            }`}/>
        ))}
      </div>
    </div>
  );
}
