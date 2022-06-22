'use strict';

/**
 *  umbrella controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::umbrella.umbrella');
