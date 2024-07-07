import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import logo from "../../assets/images/logo.svg"
import menu from "../../assets/images/menu.svg"

const NavStyles = styled.nav`
  background-color: var(--light-grey);
  padding: var(--base-size);
  position: fixed;
  width: 100%;
  z-index: 100;
  @media screen and (min-width: 1024px) {
    background-color: ${props => props.bgColor};
    transition: background-color 0.2s ease;
    border-bottom: 1px solid ${props => props.navBottomBorder};
    padding-left: calc(var(--base-size) * 4);
    padding-right: calc(var(--base-size) * 4);
  }

  .nav-wrapper {
    width: 100%;
    @media screen and (min-width: 1024px) {
      display: flex;
      max-width: 1100px;
      margin: 0 auto;
    }
  }

  .links-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 1024px) {
      flex: 1 1 auto;
    }
  }

  .list-container {
    display: none;
    @media screen and (min-width: 1024px) {
      display: flex;
      justify-content: space-between;
      flex: 1 1 auto;
    }
  }

  .list-container--visible {
    display: flex;
    flex-direction: column;
  }

  .list-container__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 16px 0;
    > a {
      font-weight: 600;
      &:hover {
        color: var(--hot-pink);
      }
    }

    @media screen and (min-width: 1024px) {
      margin: 0;
      &:not(last-child) {
        margin: 0 var(--base-size);
      }
    }

    &--home {
      @media screen and (min-width: 1024px) {
        display: none;
      }
    }

    &--button {
      display: none;
      @media screen and (min-width: 1024px) {
        display: flex;
        background-color: var(--hot-pink);
        height: calc(var(--base-size) * 4);
        border-radius: calc(var(--base-size) * 2);
        cursor: pointer;

        &:hover {
          background-color: var(--blue-grey);
        }

        > a {
          color: var(--white);

          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 calc(var(--base-size) * 2);
          height: 100%;
          &:hover,
          &:visited {
            color: var(--white);
          }
        }
      }
    }
  }

  .logo {
    background: url(${logo}) no-repeat center center;
    width: 100%;
    max-width: 140px;
    height: 50px;
    padding: 16px 0;
    flex-basis: 300px;
    flex: 1 1 auto;
  }

  .menu-burger {
    background: url(${menu}) no-repeat center center;
    width: 100%;
    max-width: 50px;
    height: 50px;
    flex-basis: 50px;
    flex: 1 1 auto;

    &:hover,
    &:focus {
      border: 1px dotted var(--blue-grey);
    }

    @media screen and (min-width: 1024px) {
      display: none;
    }
  }

  a {
    color: var(--blue-grey);
    text-decoration: none;
    width: 100%;

    &:hover,
    &:focus {
      color: var(--blue-black);
    }
  }
`

const Nav = () => {
  const [toggleNav, setToggleNav] = useState("list-container")
  const [navColor, setNavColor] = useState("transparent")
  const [navBottomBorder, setNavBottomBorder] = useState("none")
  const navRef = useRef(null)

  const white = "#FFFFFF"
  const lightGrey = "#CFD8E1"
  const transparent = "transparent"

  useEffect(() => {
    let mql = window.matchMedia("(min-width: 1024px)")
    let windowPageYOffset =
      window.pageYOffset || document.documentElement.scrollTop

    if (windowPageYOffset > 0) {
      setNavColor(white)
      setNavBottomBorder(lightGrey)
    }

    window.addEventListener("scroll", () => {
      if (mql.matches && window.scrollY > 0) {
        setNavColor(white)
        setNavBottomBorder(lightGrey)
      } else {
        setNavColor(transparent)
        setNavBottomBorder("none")
      }
    })
  }, [])

  const onClickNav = () => {
    let viewport = navRef.current.scrollWidth
    if (viewport < 1024) {
      setToggleNav("list-container")
      return toggleNav === "list-container"
        ? setToggleNav("list-container--visible")
        : setToggleNav("list-container")
    }
  }

  const onEnter = e => {
    if (e.keyCode === 13) {
      onClickNav()
    }
  }

  return (
    <NavStyles
      bgColor={navColor}
      navBottomBorder={navBottomBorder}
      ref={navRef}
    >
      <div className="nav-wrapper">
        <div className="links-container">
          <Link to="/">
            <div
              className="logo"
              role="button"
              aria-label="home"
              tabIndex={0}
            ></div>
          </Link>
          <div
            className="menu-burger"
            onClick={onClickNav}
            onKeyUp={onEnter}
            role="button"
            aria-label="menu"
            tabIndex={0}
          ></div>
        </div>
        <ul className={toggleNav}>
          <li className="list-container__item list-container__item--home">
            <Link
              to="/"
              activeStyle={{ color: `var(--hot-pink)` }}
              onClick={onClickNav}
            >
              Home
            </Link>
          </li>
          <li className="list-container__item">
            <Link
              to="/pricing"
              activeStyle={{ color: `var(--hot-pink)` }}
              onClick={onClickNav}
            >
              Pricing
            </Link>
          </li>
          <li className="list-container__item">
            <Link
              to="/about"
              activeStyle={{ color: `var(--hot-pink)` }}
              onClick={onClickNav}
            >
              About
            </Link>
          </li>
          <li className="list-container__item">
            <Link
              to="/contact"
              activeStyle={{ color: `var(--hot-pink)` }}
              onClick={onClickNav}
            >
              Contact
            </Link>
          </li>
          <li className="list-container__item list-container__item--button">
            <Link to="/contact">Schedule a Demo</Link>
          </li>
        </ul>
      </div>
    </NavStyles>
  )
}

export default Nav
