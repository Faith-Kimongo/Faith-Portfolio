import express from 'express';
import cors from 'cors';
import { db, projects } from '@workspace/db';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.get('/api/projects', async (req, res) => {
  try {
    const allProjects = await db.select().from(projects);
    res.json(allProjects);
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
