'use strict';

/**
 * umbrella service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::umbrella.umbrella');
