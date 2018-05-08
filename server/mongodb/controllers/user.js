const User = require('mongoose').model('User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const uuidv4 = require('uuid/v4');

const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config')[env];

exports.register = function (req, res) {
    if (
        req.body.email &&
        req.body.username &&
        req.body.password
    ) {
        const userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        };

        const newUser = new User(req.body);
        newUser.save((err, user) => {
            if (err) {
                return res.send(`Error registering new user ${userData.username}, ${err}`);
            }
                // return res.redirect('/profile');
                res.status(201);
                res.send(user);
        });
    }
};

const generateToken = (payload) =>
    jwt.sign(payload, config.jwtSecret, {
        expiresIn: 60 * 60 * 24 // expires in 24 hours
    });

exports.login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username }, (err, collection) => {
        if (err) {
            res.status(400);
            res.json(
                {
                    message: `Error: Unable to search for username ${username}, error ${err}.`
                }
            );
        } else if (!collection) {
            res.status(404).json(
                {
                    message: `Unable to login with username ${username}, no such user found.`
                }
            );
        } else {
            bcrypt.compare(password, collection.password, (bCryptErr, result) => {
                if (result === true) {
                    const payload = {
                        id: collection.id,
                        username: collection.username,
                        email: collection.email,
                        isAdmin: collection.isAdmin
                    };
                    res.send({
                        user: payload,
                        token: generateToken(payload)
                    });
                } else {
                    res.status(400);
                    res.json(
                        {
                            message: 'Unable to login, username or password provided is incorrect.'
                        }
                    );
                }
            });
        }
    });
};

exports.resetPwd = (req, res) => {
    res.status(200);
    res.send({
        newPassword: uuidv4()
    });
};

exports.updateUser = (req, res) => {
    const data = req.body;
    console.log('data', data);
    User.update({ _id: req.params.id }, data, function (err, result) {
        if (err) {
            res.status(400);
            res.json(
                {
                    message: `Error: User update failed for id ${req.params.id}.`
                }
            );
        }
        else {
            res.status(200);
            res.send(data);
        }
    });
};
