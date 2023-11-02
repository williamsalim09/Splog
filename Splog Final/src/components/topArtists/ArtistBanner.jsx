const ArtistBanner = () => {
  return(
    <div className="font-black text-amber-500 w-2/3 mx-auto text-center py-[8rem]">
      <div className="flex justify-center text-[12rem] lg:text-[10rem] tracking-wider scale-y-150">
        <p>ALLOW</p>
        <p className="transform -skew-x-[25deg] pl-12">US</p>
      </div>
      <p className="text-[8rem] lg:text-[6rem] font-normal">TO</p>
      <p className="text-[12rem] lg:text-[10rem] scale-y-150">INTRODUCE</p>
    </div>
  )
}

export default ArtistBanner;