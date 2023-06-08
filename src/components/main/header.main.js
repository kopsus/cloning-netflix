import React from "react"
import { Link } from "react-router-dom"

import title from "../../assets/title.png"

import { styled } from "@mui/material/styles"
import SearchIcon from "@mui/icons-material/Search"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
// import { Search } from "@mui/icons-material"
import InputBase from "@mui/material/InputBase"

import "../style/main/header.main.css"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  cursor: "pointer",
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "0",
      cursor: "pointer",
      "&:focus": {
        width: "25ch",
        border: "1px #fff solid",
        fontSize: "1.5ch",
      },
    },
  },
}))

const Header = () => {
  return (
    <>
      <header className="items-center gap-12 fixed w-full px-12 top-0 left-0 bg-backgroundParents z-50">
        <img src={title} alt="title" width={100} height={100} />
        <nav>
          <div className="nav-item">
            <p>
              <Link>Home</Link>
            </p>
            <p>
              <Link>TV Show</Link>
            </p>
            <p>
              <Link>Movies</Link>
            </p>
            <p>
              <Link>Recently Added</Link>
            </p>
            <p>
              <Link>My List</Link>
            </p>
          </div>
          <div className="nav-item">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Title, genres, people"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <p>
              <Link>DVD</Link>
            </p>
            <p>
              <Link>Kids</Link>
            </p>
            <NotificationsNoneIcon></NotificationsNoneIcon>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
