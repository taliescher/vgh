#!/usr/bin/env node

'use strict';

const GHP = require('gh-pages');
const SHELL = require('shelljs');

exports.run = function(params) {
  GHP.clean();
  const options = {
    branch: params.branch,
    dest: '.',
    dotfiles: params.addDotfiles,
    add: params.keepExistingFiles,
    tag: params.tag,
    message: params.message,
    user:
      params.name && params.email
        ? { name: params.name, email: params.email }
        : undefined
  };

  const publicPath = params.publicPath ? `/${params.publicPath}/` : '/';
  !SHELL.test('-e', `${process.cwd()}/vue.config.js`) &&
    SHELL.exec(
      `echo "module.exports = { publicPath: '${publicPath}' }" >> vue.config.js`
    );

  (() => {
    new Promise((resolve, reject) => {
      if (params.build) {
        console.log(`Ahoy => you decided to skip the building proccess.`);
        return resolve();
      }
      const packageManager = SHELL.test('-e', `${process.cwd()}/yarn.lock`)
        ? 'yarn'
        : 'npm';
      SHELL.exec(`${packageManager} run build`, (code, out, err) => {
        if (code) {
          return reject(err);
        }
        console.log(`Ahoy => building proccess complete`);
        return resolve();
      });
    })
      .catch(err => {
        console.warn(
          `Oh noes => Something went wrong during the building proccess`
        );
      })
      .then(() => {
        const targetDirectory = `${process.cwd()}/${params.dir}`;
        GHP.publish(targetDirectory, options);
      })
      .catch(err => {
        console.warn(
          `Oh noes => Something went wrong during the building proccess`
        );
      })
      .finally(() => {
        console.log(
          `Ahoy => deploy proccess complete. Make sure you have GitHub Pages enabled in this project settings ok`
        );
      });
  })();
};
