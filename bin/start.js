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

  try {
    !params.skipBuild
      ? (async () => {
          await SHELL.exec("npm run build", () =>
            console.log(`Ahoy => building proccess complete`)
          );
        })()
      : console.log(`Ahoy => building proccess skipped by the user.`);
  } catch (err) {
    console.log(
      `Oh noes => omething went wrong during the building proccess. Here's the output: ${err}`
    );
  } finally {
    GHP.publish(targetDirectory, options, console.log(`Ahoy => deploy proccess complete`));
  }
};
