import { Router } from "express"

import { SettingsControllers } from "./controllers/SettingsControllers"


const settingsControllers = new SettingsControllers();
const routes = Router()
routes.post("/settings", settingsControllers.create);

export { routes }