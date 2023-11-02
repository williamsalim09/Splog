const GenreBanner = () => {
  return (
  <div className="py-[12rem]">
      <div className="set-perspective items-center">
        <div className="custom-transform-left">
          <p className="text-amber-500 text-[20em] leading-none font-black pl-[10rem]">BREAK</p>
        </div>
      </div>
      <div className="set-perspective items-center">
        <div className="custom-transform-right">
          <p className="text-amber-500 text-[20rem] leading-none font-black pr-[10rem]">DOWN</p>
        </div>
      </div>
  </div>
  )
}

export default GenreBanner;