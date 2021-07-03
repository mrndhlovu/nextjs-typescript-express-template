import { css } from "styled-components"

export default css`
  .mi-header {
    position: fixed;
    left: 0;
    top: 0;
    transform: translateX(0);
    height: 100vh;
    width: 300px;
    background: ${props => props.theme.colors.border};
    border-right: 1px solid ${props => props.theme.colors.border};
    z-index: 10;
    transition: ${props => props.theme.variables.transition};

    &-inner {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      overflow-y: auto;
    }

    &-toggler {
      position: absolute;
      left: 100%;
      top: 20px;
      padding: 0;
      height: ${props => props.theme.variables.inputButtonHeight};
      width: 50px;
      text-align: center;
      font-size: 1.6rem;
      background: ${props => props.theme.colors.lightBody};
      display: flex;
      justify-content: center;
      align-items: center;
      display: none;

      &:focus {
        border-color: ${props => props.theme.colors.border};
      }
    }

    &-image {
      padding: 20px 0;
      display: block;
      width: 100%;
      text-align: center;
      border-bottom: 1px solid ${props => props.theme.colors.border};

      a {
        height: 200px;
        width: 200px;
        border-radius: 1000px;
        border: 7px solid ${props => props.theme.colors.border};
        overflow: hidden;
        display: inline-block;
        vertical-align: middle;
      }
    }

    &-menu {
      width: 100%;
      padding: 15px 5px;

      li {
        list-style: none;
        text-align: center;
        display: block;

        &:not(:last-child) {
          margin-bottom: 1px;
        }

        a {
          text-transform: uppercase;
          font-size: 0.94rem;
          letter-spacing: 1px;
          display: block;
          padding: 5px 0;
          color: $color-body;
          transition: ${props => props.theme.variables.transition};
          font-weight: 600;
          position: relative;
          overflow: hidden;
          z-index: 1;

          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 100%;
            height: 100%;
            width: 0;
            background: rgba($color-theme, 0.2);
            visibility: hidden;
            transition: ${props => props.theme.variables.transition};
            z-index: -1;
          }

          &:hover {
            color: $color-theme;

            &::before {
              width: 100%;
              visibility: visible;
            }
          }

          &.active {
            color: #ffffff;

            &::before {
              background: $color-theme;
              width: 100%;
              visibility: visible;
            }
          }
        }
      }
    }

    &-copyright {
      display: block;
      width: 100%;
      text-align: center;
      margin-bottom: 0;
      font-size: 1rem;
      padding: 15px 0;
      border-top: 1px solid ${props => props.theme.colors.border};

      a {
        color: $color-body;
        transition: ${props => props.theme.variables.transition};

        &:hover {
          color: $color-theme;
        }
      }
    }

    &.is-visible {
      transform: translateX(0);
    }

    @media ${props => props.theme.device.laptop} {
      width: 260px;
    }

    @media ${props => props.theme.device.notebook} {
      width: 260px;
      transform: translateX(-100%);

      &-toggler {
        display: flex;
      }

      &-image {
        a {
          height: 150px;
          width: 150px;
        }
      }

      &-menu {
        li {
          a {
            padding: 7px 0;
          }
        }
      }
    }

    @media ${props => props.theme.device.tablet} {
      width: 250px;
      transform: translateX(-100%);

      &-toggler {
        display: flex;
      }

      &-image {
        a {
          height: 150px;
          width: 150px;
        }
      }

      &-menu {
        li {
          a {
            padding: 7px 0;
          }
        }
      }
    }

    @media ${props => props.theme.device.mobileLg} {
      width: 250px;
      transform: translateX(-100%);

      &-toggler {
        display: flex;
      }

      &-image {
        a {
          height: 150px;
          width: 150px;
        }
      }

      &-menu {
        li {
          a {
            padding: 7px 0;
          }
        }
      }
    }
  }
`
