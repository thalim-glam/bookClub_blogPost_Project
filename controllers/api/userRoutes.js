// importing
const router = require('express').Router();
const { User } = require('../../models');
// create a new user with router.post
router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create(
            req.body
        );

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.logged_in = true;

            res.status(200).json(dbUserData);
        });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                password: req.body.password,
            },
        });

        if (!dbUserData) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password. Please try again!' });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password. Please try again!' });
            return;
        }

        req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.logged_in = true;

        res.status(200)
        res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
});

// Logout
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
