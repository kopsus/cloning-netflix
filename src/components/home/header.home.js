import React from "react"

import { Link } from "react-router-dom"

const HeaderHome = () => {
  return (
    <>
      <div className="flex justify-between pt-7 pb-3 px-16 fixed z-50 w-full top-0 bg-backgroundParents">
        <p className="text-textRed text-3xl font-semibold ">Sokin</p>
        <Link to="/login">
          <button
            type="button"
            className="btn bg-textRed px-5 py-1 rounded-md rou text-white hover:bg-[#BC272F]"
          >
            Masuk
          </button>
        </Link>
      </div>
    </>
  )
}

export default HeaderHome
