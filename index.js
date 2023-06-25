const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userPath = require('./routes/userPatg.js');
const projectRoute = require('./routes/projectRoutes.js')
const taskRoute = require('./routes/taskRoutes.js')
const projectMemberRoute = require('./routes/projectMemberRoutes.js')
const commentRouteRoute = require('./routes/commentRoutes.js')
const memberRoute = require('./routes/memberPath.js')


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

app.use('/api/auth',userPath)

app.use('/api/projects',projectRoute)

app.use('/api/tasks',taskRoute)

app.use('/api/projectMember',projectMemberRoute)

app.use('/api/comments', commentRouteRoute)

app.use('/api/member',memberRoute)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
