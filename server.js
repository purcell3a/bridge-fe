import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'dist' directory (Vite's build folder)
app.use(express.static(path.join(__dirname, 'dist')));

// All other routes should serve the index.html file from the 'dist' directory
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
