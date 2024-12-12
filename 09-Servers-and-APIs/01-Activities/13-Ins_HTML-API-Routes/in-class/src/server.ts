import express, { type Request, type Response } from 'express';

const app = express();
const PORT = 3001;

// We can send a body parameter to the client using the res.send() method. This body parameter can be a string, buffer, or even an array.
app.get('/', (_req: Request, res: Response) => {
  res.send(
    `<p>API - An application programming interface, is a computing interface that defines interactions between multiple software intermediaries</p>`
  );
});

app.get('/dan', (_req: Request, res: Response) => {
  res.send(`Dan is the guy typing this right nowwwwww`);
});

// This method sends a JSON response with the correct content type.
app.get('/api', (_req: Request, res: Response) => {
  console.log(_req);
  res.json({
    term: 'api',
    description:
      'An application programming interface, is a computing interface that defines interactions between multiple software intermediaries',
  });
});

app.get('/hello/express/how/are/you', (_req: Request, res: Response) => {
  console.log(_req);
  res.json(["This", "is", "a", "response"]);
});


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
