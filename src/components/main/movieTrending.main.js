import React, { useEffect, useState } from "react"

import axios from "axios"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

// import "./style/movieTranding.css"

// import required modules
import { Navigation } from "swiper"

const MovieTrending = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/movie/top_rated`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovie(response.data.results)
      })
  }, [])

  return (
    <div className="">
      <h3 className="title">Tranding</h3>
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
              <SwiperSlide key={i} className="aspect-video">
                <img
                  src={`${process.env.REACT_APP_IMGURL}/${value.backdrop_path}`}
                  alt="asu"
                />
              </SwiperSlide>
            )
          })}
      </Swiper>
    </div>
  )
}

export default MovieTrending
