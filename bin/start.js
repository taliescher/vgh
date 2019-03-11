#!/usr/bin/env node

"use strict";

const GHP = require("gh-pages");
const SHELL = require("shelljs");

exports.run = function(params) {
  GHP.clean();
  const targetDirectory = `${process.cwd()}/${params.dir}`;

  const options = {
    branch: params.branch || "gh-pages",
    dest: ".",
    dotfiles: params.dotfiles || false,
    add: params.keepExistingFiles || false,
    tag: params.tag && params.tag,
    message: params.message,
    user: { name: params.name, email: params.email } || undefined
  };

  (() => {
    new Promise((resolve, reject) => {
      if (params.skipBuild) {
        console.log(`Ahoy => you decided to skip the building proccess.`);
        return resolve();
      }
      SHELL.exec("npm run build", (code, out, err) => {
        if (code) {
          return reject(err);
        }
        console.log(`Ahoy => building proccess complete`);
        return resolve();
      });
    })
      .catch(err => {
        console.log(
          `Oh noes => Something went wrong during the building proccess. Here's the output: ${err}`
        );
      })
      .then(() => {
        GHP.publish(targetDirectory, options);
      })
      .then(() => {
        console.log(
          `Ahoy => deploy proccess complete. Make sure you have GitHub Pages enabled in this project settings ok`
        );
      })
      .catch(err => {
        console.log(
          `Oh noes => Something went wrong during the building proccess. Here's the output: ${err}`
        );
      });
  })();
};
