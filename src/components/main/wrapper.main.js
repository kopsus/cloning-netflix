import React, { useState } from "react"
import InfoIcon from "@mui/icons-material/Info"
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite"
import VolumeUpIcon from "@mui/icons-material/VolumeUp"
import VolumeOffIcon from "@mui/icons-material/VolumeOff"
import { Button } from "@mui/material"

import "../style/main/wrapper.main.css"

const Wrapper = () => {
  const [change, setChange] = useState(false)

  const handleChange = () => {
    setChange(!change)
  }
  return (
    <div className="z-10">
      <div className="text-[#fff]">
        <h1 className="font-semibold text-7xl mt-44 mb-20">Narcos</h1>
        <p className="text-lg w-[40%]">
          A gritty chronicle of the war against Colombia's infamously violent
          and powerful drug cartels.
        </p>
      </div>
      <div className="flex justify-between items-center pr-20">
        <div className="flex gap-3 my-10 text-xl">
          <div className="bg-[#fff] btnPlay">
            <PlayCircleFilledWhiteIcon
              sx={{ fontSize: 25 }}
            ></PlayCircleFilledWhiteIcon>
            <button type="button" className="btn-play">
              Play
            </button>
          </div>
          <div className="bg-[#525252] btnInfo">
            <InfoIcon sx={{ color: "white", fontSize: 25 }}></InfoIcon>
            <button type="button" className="text-[#fff] btn-info">
              More Info
            </button>
          </div>
        </div>
        <Button onClick={handleChange}>
          {!change ? (
            <VolumeUpIcon sx={{ color: "white", fontSize: 40 }}></VolumeUpIcon>
          ) : (
            <VolumeOffIcon
              sx={{ color: "white", fontSize: 40 }}
            ></VolumeOffIcon>
          )}
        </Button>
      </div>
    </div>
  )
}

export default Wrapper
