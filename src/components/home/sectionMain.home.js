import React from "react"

import Img1 from "../../assets/1.png"
import Img2 from "../../assets/2.png"
import Img3 from "../../assets/3.png"
import Img4 from "../../assets/4.png"

const SectionMainHome = () => {
  return (
    <>
      <div className="bg-customBlue w-[81%] mx-auto my-52 rounded-xl shadow-lg">
        <div className="grid grid-cols-2 justify-around p-10">
          <div className="text-white flex flex-col gap-10 justify-center ">
            <h1 className="text-5xl font-semibold">Nikmati di TV-mu</h1>
            <p className="text-lg">
              Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV,
              pemutar Blu-ray, dan banyak lagi.
            </p>
          </div>
          <div>
            <img src={Img1} alt="asu" />
          </div>
        </div>
        <hr className="mx-7" />
        <div className="grid grid-cols-2 justify-around p-10">
          <div>
            <img src={Img2} alt="asu" />
          </div>
          <div className="text-white flex flex-col gap-10 justify-center px-7 ">
            <h1 className="text-5xl font-semibold">Nonton di mana pun</h1>
            <p className="text-lg">
              Streaming film dan acara TV tak terbatas di ponsel, tablet,
              laptop, dan TV-mu.
            </p>
          </div>
        </div>
        <hr className="mx-7" />
        <div className="grid grid-cols-2 justify-around p-10">
          <div className="text-white flex flex-col gap-10 justify-center px-7 ">
            <h1 className="text-5xl font-semibold">Buat profil untuk anak</h1>
            <p className="text-lg">
              Kirim anak-anak untuk bertualang bersama karakter favorit mereka
              di dunia yang dibuat khusus untuk mereka—gratis dengan
              keanggotaanmu.
            </p>
          </div>
          <div>
            <img src={Img3} alt="asu" />
          </div>
        </div>
        <hr className="mx-7" />
        <div className="grid grid-cols-2 justify-around p-10">
          <div>
            <img src={Img4} alt="asu" />
          </div>
          <div className="text-white flex flex-col gap-10 justify-center px-7 ">
            <h1 className="text-5xl font-semibold">
              Download acara TV untuk menontonnya secara offline
            </h1>
            <p className="text-lg">
              Simpan favoritmu dengan mudah agar selalu ada acara TV dan film
              yang bisa ditonton.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionMainHome
