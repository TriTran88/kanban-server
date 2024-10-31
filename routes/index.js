const kanbanRoutes = require('./kanban.routes');

module.exports = app => {
  app.use('/api/v1/kanban', kanbanRoutes)
};
