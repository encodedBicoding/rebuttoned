import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.status(200).json({
    status:200,
    message: 'Welcome to Rebuttoned'
  })
});

export default routes;