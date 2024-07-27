const express = require('express');
const cors = require('cors');  // Import cors package
const app = express();
const port = 9876;

app.use(cors());  // Enable CORS for all routes

const primes = [2, 3, 5, 7, 11];
const fibonacci = [1, 1, 2, 3, 5, 8];
const evens = [2, 4, 6, 8, 10];
const randoms = [7, 13, 22, 5, 3];

app.get('/numbers/:type', (req, res) => {
  const type = req.params.type;
  let numbers;

  switch (type) {
    case 'p':
      numbers = primes;
      break;
    case 'f':
      numbers = fibonacci;
      break;
    case 'e':
      numbers = evens;
      break;
    case 'r':
      numbers = randoms;
      break;
    default:
      return res.status(400).send('Invalid type');
  }

  res.json({ numbers });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
