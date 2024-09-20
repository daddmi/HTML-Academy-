import { Router } from "express"

const dashboardRouter = Router()

import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dashboardRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../views', 'index.html'));
});

export default dashboardRouter