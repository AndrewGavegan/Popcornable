const router = require('express').Router();
const { User, Review, Movie } = require('../../models');
// linking to authentifictaion middleware that was set up in utils folder //
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const data = await User.findAll({
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Movie,
          attributes: ['id', 'name', 'year', 'genre', 'runtime', 'director']
        },
        {
          model: Review,
          attributes: ['id', 'body', 'rating'],
          include: {
            model: Movie,
            attributes: ['name']
          }
        }]
    });
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to user's dashboard
router.get('/:id', withAuth, async (req, res) => {
  try {
    console.log(`GET /api/user/${req.params.id}`);
    const userData = await User.findOne({
      attributes: { exclude: ['password'] },
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Review,
          include: {
            model: Movie,
            attributes: ['name', 'year', 'genre', 'image_url']
          }
        }]
    });

    const data = userData.get({ plain: true });
    if (!data) {
      res.status(404).json({ message: 'No user has this ID' });
      return;
    }
    console.log(data.reviews);
    // res.json(data);
    // render homepage (and partial homeposts)
    res.render('dashboard', {
      data,
      userId: req.session.user_id,
      userName: req.session.name,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const data = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    req.session.save(() => {
      req.session.user_id = data.id;
      req.session.name = data.name;
      req.session.loggedIn = true;

      res.status(200).json(data);
    });
  } catch (err) {
    res.status(400).json(err);
    alert("Error creating user, password must be minimum 8 characters long")
  }
});

router.post('/login', async (req, res) => {
  try {
    const data = await User.findOne({ where: { email: req.body.email } });

    if (!data) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = data.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = data.id;
      req.session.name = data.name;
      req.session.loggedIn = true;

      res.json({ user: data, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;