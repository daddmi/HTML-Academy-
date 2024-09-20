import { Router } from "express"

const homeRouter = Router()

import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Route to handle requests to "/about" and serve about.html
homeRouter.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../../views', 'about.html'));
});
homeRouter.get('/contact_us', (req, res) => {
    res.sendFile(path.join(__dirname, '../../views', 'contact_us.html'));
});
homeRouter.get('/membership', (req, res) => {
    res.sendFile(path.join(__dirname, '../../views', 'membership.html'));
});
homeRouter.get('/faqs', (req, res) => {
    res.sendFile(path.join(__dirname, '../../views', 'faqs.html'));
});
homeRouter.get('/georgia', (req, res) => {
    res.sendFile(path.join(__dirname, '../../views', 'georgia.html'));
});



export default homeRouter