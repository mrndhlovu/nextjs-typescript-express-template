import chalk from "chalk"
import express from "express"
import { promisify } from "util"

import { NextHandlerType } from ".."
import { getRoutes } from "../routes"
import { closeOnExit } from "./closeOnExit"
import { errorHandler } from "./error"

const startServer = (handle: NextHandlerType, port: number) => {
  const app = express()

  app.disable("x-powered-by")
  app.use("/api", getRoutes())
  app.use(errorHandler)
  app.all("*", (req: any, res: any) => handle(req, res))

  return new Promise(resolve => {
    const server = app.listen(port, () => {
      chalk.green(`> Ready on http://localhost:${port}`)
    })

    const originalClose = server.close.bind(server)
    server.close = promisify(originalClose)
    closeOnExit(server)

    resolve(server)
  })
}

export { startServer }
