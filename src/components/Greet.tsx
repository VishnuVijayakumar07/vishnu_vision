import Home from "./Home";
import vishnu from "../../public/image/vishnu.png";

function Greet() {
  return (
    <div className="w-full h-screen flex flex-col-reverse bg-black overflow-hidden">

      <div className="w-full h-[35%] bg-neutral-950 flex flex-col items-center justify-center p-8 border-t border-white/5">
        <div className="relative group flex flex-col items-center z-20">
          <div className="absolute -inset-8 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <img
            src={vishnu}
            alt="Vishnu"
            className="w-100 h-100 md:w-100 md:h-100 object-contain relative z-20 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
            <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-[0.3em] opacity-100 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] px-4 text-center">
              Vishnu V
            </h2>
          </div>

          <div className="w-12 h-1 bg-white/20 mt-2 rounded-full transform origin-left transition-all duration-500 group-hover:w-24 group-hover:bg-white/40" />
        </div>
      </div>

      <div className="relative w-full h-[65%] bg-black">
        <Home />
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-4 z-40">
          <h2
            className="text-black text-2xl md:text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-2 opacity-100"
            style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 1)" }}
          >
            Software Engineer
          </h2>
          <h1 className="text-white text-5xl md:text-8xl lg:text-[11rem] font-black uppercase tracking-tighter opacity-95 text-center leading-none">
            Portfolio
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Greet;
