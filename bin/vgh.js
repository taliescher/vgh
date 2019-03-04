#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("vgh-commit && vgh-push");
