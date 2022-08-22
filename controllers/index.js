const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashRoutes = require('./dashboard-routes');
const logOutRoutes = require('./logout-routes');

router.use('/home',homeRoutes );
router.use('/dashboard', dashRoutes);
router.use('/logout', logOutRoutes);
router.use('/api', apiRoutes);




module.exports = router;