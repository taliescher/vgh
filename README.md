#### vgh-pages
###### What
CLI to quickly deploy [VueJS](https://vuejs.org/) projects to GitHub Pages.
This is pretty useful for quick mocks and prototypes.

***
###### Why
<dd>
why not?
</dd>

***
###### How

<dt>
Installation
</dt>
<dd>
If you don't have them already, please install the following dependencies:

- [node](https://nodejs.org)
- [GIT](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Then you can install vgh-pages through a package manager of your preference:

```bash
# using yarn
yarn add global vgh-pages
# using npm
npm i -g vgh-pages
```
</dd>
<dt>
Usage
</dt>
<dd>

```bash
# case your project goes directly in the root
# or your publicPath is already properly set inside the vue.config.js
vgh
# or else
# don't forguet to set your public path, the project name that appears after the slash.
# (e.g.: https://[your-username].github.io/[your-project-name])
vgh --public-path [your-project-name]

```

flag                         |                 Usage                 |             example            |                        Default                         |
---------------------------- | ------------------------------------- | ------------------------------ | ------------------------------------------------------ |
--public-path [string]       |`-p [path]` or `--public-path [path]`  | `vgh -p your-project-name`     |'/'                                                     |
--dir [string]               |`-d [dir]` or `--dir [dir]`            | `vgh -d dist`                  | /dist                                                  |
--add [bool]                 |`-a` or `--add-dotfiles`               | `vgh -a`                       | false                                                  |
--branch [string]            |`-b [branch]` or `--branch [branch]`   | `vgh -b gh-pages`              | gh-pages                                               |
--email [string]             |`-e [email]` or `--email [email]`      | `vgh -e you@email.com`         | Implyied from your Git Global variables _or_ undefined |
--keep-existing-files [bool] |`-k` or `--keep-existing-files`        | `vgh -k`                       | false                                                  |
--message [string]           |`-m [message]` or `--message [message]`| `vgh -m 'your commit message'` | 'Updates for GitHub Pages'                             |
--name [string]              |`-n [name]` or `--name [name]`         | `vgh -n 'your-user-name'`      | Implyied from your Git Global variables _or_ undefined |
--skip-build [bool]          |`-s` or `--skip-build`                 | `vgh -s`                       | false                                                  |
--tag [string]               |`-t [tag]` or `--tag [tag]`            | `vgh -t tag-name`              | ''                                                     |
</dd>

***

@ instead of ..