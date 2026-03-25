const express = require('express');
const path = require('path');
const fs = require('fs/promises');

const app = express();
const port = 3035;

app.use(express.json()); // required to read req.body

app.use('/data', express.static(path.join(__dirname, '..', 'data')));

// Handle the root route and send the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'ECCM.html'));
});

app.put('/api/config', async (req, res) => {
  try {
    const filePath = path.resolve(__dirname, '../data/config.json');
    await fs.writeFile(filePath, JSON.stringify(req.body, null, 2), 'utf8');
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to write config.json' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});