import React from "react"

import { Button, TextField } from "@mui/material"
import styled from "@emotion/styled"

const FormEmail = () => {
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

  const ButtonMasuk = styled(Button)({
    backgroundColor: "#E50914",
    "&:hover": {
      backgroundColor: "#BC272F",
    },
  })

  return (
    <>
      <form className="mt-16">
        <div className="rounded-lg px-5 py-3 my-10 text-white flex flex-col gap-5">
          <label className="text-lg">
            Siap menonton? Masukkan email untuk membuat atau memulai lagi
            keanggotaanmu.
          </label>
          <div className="w-1/2 flex gap-5 justify-between">
            <CssTextField
              label="Alamat email"
              id="custom-css-outlined-input"
              size="small"
              fullWidth
              sx={{
                backgroundColor: "#00081D",
              }}
              InputLabelProps={{
                sx: {
                  color: "#B2BAC2",
                },
              }}
            />
            <ButtonMasuk variant="contained" className="bg-textRed">
              Masuk
            </ButtonMasuk>

            {/* <Form CssTextField={CssTextField} /> */}
          </div>
        </div>
      </form>
    </>
  )
}

export default FormEmail
