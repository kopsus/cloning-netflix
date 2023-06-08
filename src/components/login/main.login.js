import React, { useState } from "react"

import { Button, TextField } from "@mui/material"
import styled from "@emotion/styled"
import { Link, useNavigate } from "react-router-dom"

const Main = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email.trim() !== "" && password.trim() !== "") {
      // Lakukan tindakan yang diperlukan dengan nilai email dan password
      // Contoh: Melakukan panggilan API, memvalidasi kredensial, dll.

      // Arahkan ke halaman "main"
      navigate("/main")
    }
  }

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#fff",
    },
    "& .MuiInputBase-input": {
      color: "#fff",
    },
    "&MuiInputBase-input": {
      color: "#fff",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#B2BAC2",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "15px",
      backgroundColor: "#00081D",
      "& fieldset": {
        borderColor: "#E0E3E7",
      },
      "&:hover fieldset": {
        borderColor: "#B2BAC2",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
        color: "#fff",
      },
    },
  })

  const ButtonLogin = styled(Button)({
    backgroundColor: "#E50914",
    width: "100%",
    margin: "50px 0 20px",
    padding: "10px 0",
    "&:hover": {
      backgroundColor: "#BC272F",
    },
  })

  return (
    <>
      <div className="px-16 py-7">
        <p className="text-textRed text-3xl font-semibold ">Sokin</p>
        <form className="modal-box bg-customBlue px-16 py-10 w-[45%] mx-auto my-10 rounded-xl">
          <h3 className="text-xl font-semibold text-white">Masuk</h3>
          <CssTextField
            // onChange={(e) => setEmail(e.target.value)}
            // value={email}
            label="Email atau nomor telephone"
            id="custom-css-outlined-input"
            size="medium"
            required
            fullWidth
            sx={{
              margin: "20px 0",
            }}
            InputLabelProps={{
              sx: {
                color: "#B2BAC2",
              },
            }}
          />
          <CssTextField
            // onChange={(e) => setPw(e.target.value)}
            label="Password"
            type="password"
            id="custom-css-outlined-input"
            size="medium"
            required
            fullWidth
            InputLabelProps={{
              sx: {
                color: "#B2BAC2",
              },
            }}
          />

          <div>
            <ButtonLogin
              onClick={handleSubmit}
              // type="submit"
              variant="contained"
              className=""
            >
              Login
            </ButtonLogin>
          </div>

          <p className="text-white">
            Baru di Sokin? {"  "}
            <span className="font-semibold text-blue-700 hover:text-blue-500">
              <Link>Daftar Sekarang</Link>
            </span>
          </p>
        </form>
      </div>
    </>
  )
}

export default Main
