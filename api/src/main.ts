/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import { samplePolicies } from './policies.data';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.get('/api/policies', (req, res) => {
  res.send(samplePolicies);
});

const port = process.env['PORT'] || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
