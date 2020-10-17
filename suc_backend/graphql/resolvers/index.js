const authResolver = require('./auth');
const achievementResolver = require('./achievementR');
const additionalResolver = require('./additionalDetailsR');
const addressResolver = require('./addressR');
const alumniResolver = require('./alumniR');
const courseResolver = require('./courseR');
const educationResolver = require('./educationR');
const languageResolver = require('./languageR');
const positionResolver = require('./positionR');
const projectResolver = require('./projectR');
const resctOutResolver = require('./reachOutR');
const skillResolver = require('./skillsR');
const profileResolver = require('./profileR');

const rootResolver = {
    ...authResolver,
    ...achievementResolver,
    ...additionalResolver,
    ...addressResolver,
    ...alumniResolver,
    ...courseResolver,
    ...educationResolver,
    ...languageResolver,
    ...positionResolver,
    ...projectResolver,
    ...resctOutResolver,
    ...skillResolver,
    ...profileResolver
};

module.exports = rootResolver;