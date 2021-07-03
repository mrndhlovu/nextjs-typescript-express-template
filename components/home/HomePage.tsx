import React from "react"

import CardsList from "./CardsList"
import HomeSidebar from "./HomeSidebar"
import Layout from "../layout"

const HomePage = () => {
  return (
    <Layout>
      <HomeSidebar />
      <CardsList />
    </Layout>
  )
}

export default HomePage
