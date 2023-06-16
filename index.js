const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config(); 

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

app.get('/health', (req, res) => {
  
  const mongoDbStatus = mongoose.connection.readyState === 1 ? 'ok' : 'failed';

 

  const healthStatus = {
    redis: 'ok',
    postgres: 'ok',
    mongo: mongoDbStatus === 'ok' ? 'ok' : 'failed',
    rabbit: 'ok'
  };
  
  res.json(healthStatus); 

});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
