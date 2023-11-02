import image1 from "../../assets/New-Jeans-Album-Cover.jpg"
import image2 from "../../assets/Human-Album.png"
import image3 from "../../assets/Love-Dive-Album.jpg"

const LandingBanner = () => {
  return (
    <div className="pt-[1rem]">
      <img  className="absolute z-10 w-[22.5%] right-[10%]" src={image1} alt="new jeans album cover" />
      <img  className="absolute z-10 w-[27.5%] left-[10%] top-[22.5%]" src={image2} alt="one republic album cover" />
      <img  className="absolute z-10 w-[17.5%] right-[37.5%] top-[62.5%]" src={image3} alt="ive album cover" />

      <div className="relative flex overflow-hidden leading-none">
          <div className="whitespace-nowrap animate-marquee text-landing-marquee font-black font-sans text-amber-500 drop-shadow-[0_0px_1px_rgba(245,158,11,1)]">
            <span className="mx-9 text-black">VENTURE</span>
            <span className="mx-9 ">FIND OUT</span>
            <span className="mx-9 text-black">DISCOVER</span>
            <span className="mx-9 ">EXPLORE</span>
          </div>
          <div className="absolute top-0 whitespace-nowrap animate-marqueeCopy text-landing-marquee font-black font-sans text-amber-500 drop-shadow-[0_0px_1px_rgba(245,158,11,1)]">
            <span className="mx-9 text-black">VENTURE</span>
            <span className="mx-9 ">FIND OUT</span>
            <span className="mx-9 text-black">DISCOVER</span>
            <span className="mx-9 ">EXPLORE</span>
          </div>
      </div>
      <div className="relative flex overflow-hidden leading-none z-20">
          <div className="whitespace-nowrap animate-marqueeReverse text-landing-marquee font-black font-sans text-amber-500 drop-shadow-[0_0px_1px_rgba(245,158,11,1)]">
            <span className="mx-9 text-black">FIND OUT</span>
            <span className="mx-9 ">VENTURE</span>
            <span className="mx-9 text-black">EXPLORE</span>
            <span className="mx-9 ">DISCOVER</span>
          </div>
          <div className="absolute top-0 whitespace-nowrap animate-marqueeReverseCopy text-landing-marquee font-black font-sans text-amber-500 drop-shadow-[0_0px_1px_rgba(245,158,11,1)]">
            <span className="mx-9 text-black">FIND OUT</span>
            <span className="mx-9 ">VENTURE</span>
            <span className="mx-9 text-black">EXPLORE</span>
            <span className="mx-9 ">DISCOVER</span>
          </div>
      </div>
      <div className="relative flex overflow-hidden leading-none">
          <div className="whitespace-nowrap animate-marquee text-landing-marquee font-black font-sans text-amber-500 drop-shadow-[0_0px_1px_rgba(245,158,11,1)]">
            <span className="mx-9 text-black">DISCOVER</span>
            <span className="mx-9 ">FIND OUT</span>
            <span className="mx-9 text-black">EXPLORE</span>
            <span className="mx-9 ">VENTURE</span>
          </div>
          <div className="absolute top-0 whitespace-nowrap animate-marqueeCopy text-landing-marquee font-black font-sans text-amber-500 drop-shadow-[0_0px_1px_rgba(245,158,11,1)]">
            <span className="mx-9 text-black">DISCOVER</span>
            <span className="mx-9 ">FIND OUT</span>
            <span className="mx-9 text-black">EXPLORE</span>
            <span className="mx-9 ">VENTURE</span>
          </div>
      </div>
    </div>
  )
}

export default LandingBanner;