import React, { useState } from "react"

import panah from "../../assets/panah.png"
import FormEmail from "./formEmail.home"

const Questions = ({ questions, answer }) => {
  const [arrowFlip, setArrowFlip] = useState(false)

  const handleChange = () => {
    setArrowFlip(!arrowFlip)
  }

  return (
    <div className="my-3 border px-14 py-3 bg-customBlue ">
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">{questions}</p>
        <div
          onClick={handleChange}
          style={{
            rotate: arrowFlip ? "-180deg" : "0deg",
            transition: "500ms",
            cursor: "pointer",
          }}
        >
          <img src={panah} alt="panah" width={30} />
        </div>
      </div>
      <div
        style={{
          opacity: arrowFlip ? "1" : "0",
          transform: arrowFlip ? "translateY(0)" : "translateY(-20px)",
          transition: "500ms",
        }}
      >
        {arrowFlip && (
          <div className="mt-5">
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  )
}

const SectionQuestion = () => {
  return (
    <>
      <div className="w-[80%] mx-auto rounded-md my-20 text-white">
        <p className="my-10 text-4xl font-bold">Tanya Jawab</p>
        <Questions questions="Apa itu sokin ?" answer="sokin adalah" />
        <Questions
          questions="Berapa biaya langganan Sokin ?"
          answer="sokin adalah"
        />
        <Questions
          questions="Dimana saya bisa menonton ?"
          answer="sokin adalah"
        />
        <Questions
          questions="Bagaimana cara membatalkannya ?"
          answer="sokin adalah"
        />
        <Questions
          questions="Apa yang bisa di tonton di Sokin ?"
          answer="sokin adalah"
        />
        <Questions
          questions="Apakah Sokin sesuai bagi anak ?"
          answer="sokin adalah"
        />
        <FormEmail />
      </div>
    </>
  )
}

export default SectionQuestion
