import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'
import indexRouter from './routes/index.js';
const app = express();
const PORT = process.env.PORT || 8000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors())
app.use(express.json({limit: '50mb'}))
 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.use((req, res, next) => {
    if (req.url.endsWith('.html')) {
        const newUrl = req.url.slice(0, -5); // Remove '.html' extension
        console.log(newUrl)
        res.redirect(301, newUrl);
    } else {
        next();
    }
});
// Define a route to serve your HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.use(indexRouter)

app.all('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});

// Handle server errors (as a catch-all)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).sendFile(path.join(__dirname, 'views', '500.html'));
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});