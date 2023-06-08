import React from "react"

import "../style/home/wrapper.home.css"
import FormEmail from "./formEmail.home"

const WrapperHome = () => {
  return (
    <>
      <div className="z-10 mt-40 px-16">
        <div className="text-white w-[65%]">
          <h1 className="text-6xl font-bold leading-snug mb-8">
            Film, Acara TV tak terbatas, dan banyak lagi
          </h1>
          <p className="text-2xl">Tonton di mana pun. Batalkan kapan pun.</p>
        </div>
        <div className="w-[90%] mx-auto bg-customBlue rounded-md shadow-lg">
          <FormEmail />
        </div>
      </div>
    </>
  )
}

export default WrapperHome
