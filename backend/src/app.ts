import express from 'express';
import path from 'path';
import fs from 'fs';
import ReactDOM from 'react-dom/server';

const app = express();

app.listen(4000, () => {
  console.log('Running in port 4000');
});

app.get('/', (req, res) => {
  console.log('In Route "/"');

  const root = (
    <html>
        <body>
          <div id="root"><App /></div>
        </body>
    </html>
  );
});
