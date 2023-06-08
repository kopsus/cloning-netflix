import React from "react"
import Header from "./header.home"
import Wrapper from "./wrapper.home"
import SectionMainHome from "./sectionMain.home"
import SectionQuestion from "./sectionQuestion.home"

const Main = () => {
  return (
    <>
      <div className="">
        <Header />
        <Wrapper />
        <SectionMainHome />
        <SectionQuestion />
      </div>
    </>
  )
}

export default Main
