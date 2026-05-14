'use strict';

/**
 * learn-language service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::learn-language.learn-language');
