import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apartmentRoutes from './routes/apartments';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/apartments', apartmentRoutes);

app.listen(port, () => {
  console.log(`Server is waiting for requests on http://localhost:${port}`);
});
