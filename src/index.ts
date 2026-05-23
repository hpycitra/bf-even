import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = express();

app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rute tes agar /api/health bisa diakses
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

// Pastikan semua rute backend memakai prefix /api
app.use('/api', routes);

export default app;
