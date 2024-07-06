const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/submit', (req, res) => {
  const { email } = req.body;
  console.log(`Received email: ${email}`);
  res.json({ email });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
