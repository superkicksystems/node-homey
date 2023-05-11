'use strict';

const colors = require('colors');
const { Log } = require('../../..');
const { App } = require('../../..');

exports.desc = 'Publish a Homey App to the Homey Apps Store';
exports.handler = async yargs => {
  try {
    const app = new App(yargs.path);
    await app.publish();
    process.exit(0);
  } catch (err) {
    Log(colors.red(err.message));
    process.exit(1);
  }
};
