import express from 'express';
const router = express.Router();
import user_routes from './users';
import path from 'path';
import dragon_routes from './DragonWriter';

router.use('/users', user_routes);
router.use('/dragons', dragon_routes);

// If no API routes are hit, send the React app
// Without this, if you refresh the page on anything but the base url (i.e. "/")
// It will respond with a 'Cannot GET' error because the server
//    is trying to respond to that url from the back end
//    rather than letting react-router handle it on the front end
// So this ensures the routing will work properly;
//    it is important for when a user either types the url themselves
//    or saves the page as one of the routes rather than the base url.
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

export default router;