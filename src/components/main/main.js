import React from "react"
import Header from "./header.main"
import Wrapper from "./wrapper.main"
import MovieOriginals from "./movieOriginals.main"
import MovieTrending from "./movieTrending.main"
import MovieTopRated from "./movieTopRated.main"

const Main = () => {
  return (
    <>
      <div className="px-12 pb-20">
        <Header />
        <Wrapper />
      </div>
      <div className="px-3">
        <MovieOriginals />
        <MovieTopRated />
        <MovieTrending />
      </div>
    </>
  )
}

export default Main
