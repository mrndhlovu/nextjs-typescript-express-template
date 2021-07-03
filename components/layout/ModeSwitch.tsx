import React from "react"
import styled from "styled-components"

import { FiSun } from "react-icons/fi"

import { useGlobalContext } from "../../helpers/hooks/context"

const Container = styled.div`
  background: ${props => props.theme.colors.secondary};
  position: fixed;
  z-index: 999;
  height: 40px;
  left: auto;
  right: 0;
  top: 60px;
  padding: 0 10px;
  display: flex;
  align-items: center;

  .icon {
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
    margin-right: 5px;

    svg {
      fill: #fff;

      & > * {
        fill: #fff;
      }
    }
  }

  .light-mode-switch {
    display: inline-block;
    height: 20px;
    width: 40px;
    background: ${props => props.theme.colors.border};
    border-radius: 100px;
    position: relative;
    vertical-align: middle;
    border: 0;

    &::after {
      content: "";
      position: absolute;
      left: 2px;
      top: 2px;
      height: 16px;
      width: 16px;
      border-radius: 100px;
      background: #ffffff;
      transition: ${props => props.theme.variables.transition};
    }

    &.active {
      &::after {
        left: 22px;
        background: ${props => props.theme.colors.primary};
      }
    }
  }
`

const ModeSwitch = () => {
  const { lightMode, handleModeChange } = useGlobalContext()

  return (
    <Container className="light-mode">
      <span className="icon">
        <FiSun />
      </span>
      <button
        className={lightMode ? "light-mode-switch active" : "light-mode-switch"}
        onClick={handleModeChange}
      ></button>
    </Container>
  )
}

export default ModeSwitch
