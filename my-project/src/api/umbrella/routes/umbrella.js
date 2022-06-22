'use strict';

/**
 * umbrella router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::umbrella.umbrella');
