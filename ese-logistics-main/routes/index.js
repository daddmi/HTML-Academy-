import { Router } from "express";
import homeRouter from "./home/home.routes.js";
import dashboardRouter from "./home/dashboard.routes.js";


const indexRouter =  Router()

indexRouter.use(homeRouter)
indexRouter.use('/dashboard', dashboardRouter)

export default indexRouter