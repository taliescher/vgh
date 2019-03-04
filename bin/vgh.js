#!/usr/bin/env node

"use strict";

const start = require("./start");
const PKG = require("../package.json");
const options = require("commander");

options
  .description(PKG.description)
  .version(PKG.version, "-v, -V, --version")
  .option(
    "-d, --dir <dir>",
    "Directory of the content to be published. /dist is the default",
    "dist"
  )
  .option(
    "-p, --public-path <path>",
    "by default we assume you want your app to be deployed at the root of your domain. If it's not the case, set this variable as the name of the path."
  )
  .option(
    "-a, --add-dotfiles",
    "by default git ignores files starting with a '.'; To add them set this flag to true"
  )
  .option(
    "-b, --branch <branch>",
    "The git branch target for your GitHub Pages",
    "gh-pages"
  )
  .option(
    "-e, --email <email>",
    "The git user-email which is associated with this commit"
  )
  .option(
    "-k, --keep-existing-files",
    "by default git cleans existing files before adding the new ones. Setting this to true leaves the existing ones untouched"
  )
  .option(
    "-m, --message <message>",
    "The commit message",
    "Updates for GitHub Pages"
  )
  .option(
    "-n, --name <name>",
    "The git user-name which is associated with this commit."
  )
  .option(
    "-s, --skip-build",
    "skips building process. If not set the project will be built"
  )
  .option(
    "-t, --tag <tag>",
    "Create a tag after committing changes on the target branch. By default, no tag is created."
  )
  .parse(process.argv);

try {
  start.run(options);
} catch (err) {
  process.exit(1);
}
