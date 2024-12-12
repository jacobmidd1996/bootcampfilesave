import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import askRoutes from './routes/api/askRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static('../client/dist'));

// Use the askRoutes for handling requests
app.use('/api', askRoutes);

// Serve static files
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
