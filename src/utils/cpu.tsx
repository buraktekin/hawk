import osX from 'os';
import os from 'os-utils';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Express server initials
const port = 3000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET request to return CPU data
let cpu = {
  x: "CPU",
  y: 0,
  info: {
    cpus: osX.cpus(),
    platform: osX.type(),
    osVersion: osX.version(),
    sysUpTime: osX.uptime(),
    cpuCount: os.cpuCount(),
  }
};

app.get('/api/cpu', (req: Request, res: Response) => {
  // Gathering CPU info
  os.cpuUsage((usage: number) => {
    cpu.y = parseFloat(usage.toFixed(2));
  });

  res.json(cpu);
});

// Run server
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));