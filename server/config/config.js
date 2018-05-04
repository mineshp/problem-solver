const path = require('path');
const rootPath = path.normalize(__dirname + '/../');

module.exports = {
    awsConfig: {
        region: 'eu-west-1'
    },
    test: {
        rootPath,
        mongodb: {
            db: 'mongodb://localhost/test'
        },
        port: process.env.PORT || 3030,
        jwtSecret: 'isThisStillASecret'
    },
    local: {
        rootPath,
        mongodb: {
            db: 'mongodb://localhost/problemSolverDb'
        },
        dynamodb: {
            listsTable: 'lists-morpheus-dev',
            projectsTable: 'projects-morpheus-dev'
        },
        port: process.env.PORT || 3030,
        jwtSecret: 'isThisStillASecret'
    },
    development: {
        rootPath,
        mongodb: {
            db: 'mongodb://localhost/problemSolverDb'
        },
        port: process.env.PORT || 3030,
        jwtSecret: 'isThisStillASecret'
    },
    production: {
        rootPath,
        mongodb: {
            db: 'mongodb://localhost/problemSolverDb'
        },
        port: process.env.PORT || 80,
        jwtSecret: 'iknowsomethingyoudontknow' // TODO: Use complicated string
    }
};
