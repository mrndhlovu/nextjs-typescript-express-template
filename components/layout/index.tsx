import { ReactNode, useEffect } from "react"
import { isEmpty } from "lodash"

import { Notifications } from "../shared"
import { ThemeProvider, GlobalContextProvider } from "../../helpers/providers"
import { useGlobalContext } from "../../helpers/hooks/context"
import Head from "./Head"
import Header from "../header/Header"
import ModeSwitch from "./ModeSwitch"

export const siteTitle = "Trello clone"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const { lightMode, notifications } = useGlobalContext()

  const hasNotification = !isEmpty(notifications?.list)

  useEffect(() => {
    lightMode
      ? document.body.classList.add("light")
      : document.body.classList.remove("light")
  }, [lightMode])

  return (
    <GlobalContextProvider>
      <ThemeProvider>
        <Head siteTitle={siteTitle} />
        <main>
          {hasNotification && <Notifications />}
          <Header />
          <ModeSwitch />
          {children}
        </main>
      </ThemeProvider>
    </GlobalContextProvider>
  )
}

export default Layout
