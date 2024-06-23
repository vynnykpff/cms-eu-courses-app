const strapi = require('@strapi/strapi');

const startServer = () => {
  strapi().start()
    .catch(err => {
      console.error('Server error:', err);
      setTimeout(startServer, 5000);
    });
};

startServer();