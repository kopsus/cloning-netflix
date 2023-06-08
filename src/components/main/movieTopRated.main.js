import axios from "axios"
import React, { useEffect, useState } from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

// import required modules
import { Navigation } from "swiper"

const MovieTopRated = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/movie/popular`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => setMovie(response.data.results))
  })

  return (
    <div className="my-20">
      <h3 className="title">Top Rated</h3>
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

export default MovieTopRated
