import express from 'express';

const app = express();
const port = '3333' || process.env.PORT;

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
