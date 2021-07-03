import { createContext, useContext } from "react"
import {
  DefaultGlobalContextTypes,
  notificationsInitialState,
} from "../providers/GlobalContextProvider"

const GlobalContext = createContext<DefaultGlobalContextTypes>({
  lightMode: false,
  handleModeChange: () => {},
  dismissNotification: () => {},
  notify: () => {},
  notifications: notificationsInitialState,
})

const ThemeContext = createContext(null)
const useGlobalContext = () => useContext(GlobalContext)

export { useGlobalContext, GlobalContext, ThemeContext }
