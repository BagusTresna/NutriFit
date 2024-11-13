const Hapi = require('@hapi/hapi');
const userRoutes = require('./user-api/routes'); // Impor rute dari routes.js
const articleRoutes = require('./article-api/routes');

const init = async() => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });

    server.route([...userRoutes, ...articleRoutes]);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();