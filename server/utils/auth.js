const jwt = require('jsonwebtoken');

const secret = 'gotta love hamsters';
const expiration = '2h';

module.exports = {
    signToken: function({ username, email, _id}) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration })
    },

    authMiddleware: function({ req }) {
        // token can be sent by body, query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        // separate "Bearer" from token
        if (req.headers.authorization) {
            token = token
                .split(' ')
                .pop()
                .trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        return req;
    },
};