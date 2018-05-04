const cookieSession = require('cookie-session');
const userMongodb = require('../mongodb/controllers/user');

const user = userMongodb;


module.exports = function (app) {
    app.use(cookieSession({
        name: 'problem-solver-session',
        keys: ['abc123', 'axyz123']
    }));
    app.get('/api', (req, res) => {
        res.send('Welcome to the backend');
    });

    app.post('/api/user/login', user.login);
    app.post('/api/user/register', user.register);
    app.post('/api/user/password/reset', user.resetPwd);

    app.all('/api/*', (req,res) => {
		res.sendStatus(404);
	});
};
