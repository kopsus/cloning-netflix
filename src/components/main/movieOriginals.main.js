import React, { useEffect, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "../style/main/movie.main.css"

// import required modules
import { Navigation } from "swiper"

import axios from "axios"

export default function MovieOriginals() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovie(response.data.results)
      })
  }, [])

  return (
    <>
      <h3 className="title">Movie Originals</h3>
      <Swiper
        slidesPerView={4}
        spaceBetween={13}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {movie &&
          movie.map((value, i) => {
            return (
              <SwiperSlide key={i}>
                <img
                  src={`${process.env.REACT_APP_IMGURL}/${value.poster_path}`}
                  alt="asu"
                />
              </SwiperSlide>
            )
          })}
      </Swiper>
    </>
  )
}
