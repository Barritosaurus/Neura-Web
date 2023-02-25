# How to Contribute

Welcome! This document explains all of our contribution practices. This is a
comprehensive guide on how to interact with the project, including tools,
workflows, and conventions we use.

If you're new, continue to the next section for our getting started guide.

## Getting Started

This will get you started with the basics for working with this project, but be
sure to check out the full document for all of our best practices.

### How We Collaborate

We use [GitHub] to host our repository. This is where you can find the project.
We also use GitHub's, [issues][issue], [pull requests][pr], and [projects] for
collaboration. Be sure to check out the 'Project details' panel on each project
for more information.

Many of us use [Trello] for note taking as well as higher level task and project
management. This is a great tool, with a rich text editor, that lets you easily
take and share notes.

We use [Discord] for general communication. This should be your go to for
immediate or asynchronous communication.

[github]: https://github.com/Neura-Studios/NeuraOne-Game
[trello]: https://trello.com/
[discord]: https://discord.com/

### Our Tooling
Our tooling is extremely simple for Neura-Web, it is highly recommended to develop 
using [Visual Studio Code][vscode] as it has plugins available to make development much easier.
For more in-depth information please see the [tooling](#tooling) section.

[vscode]: https://code.visualstudio.com/

## Submitting Changes

All changes should be submitted through pull requests and pass review.

Be sure to:

- Start by creating a new branch to work from
  - Use a branch name of the form `<type>-<issue>-<description>`, such as
    `fix-123-light-flickering`
    - This helps us easily identify branches, match them to issues, and know
      what they're for
    - Use types like `fix`, `feature`, `docs`, `test`, `tooling`, `hotfix`, we
      can easily sort and search branches by prefixing them this way
- When you're done making your changes, open a pull request against `main`
  - Include the issue number for the associated issue (be sure to use closing
    keywords)
  - Consider opening a draft pull request early. This is the best way to
    initiate discussion as you progress.
- Wait for your changes to be reviewed
  - Remain active during this process, the faster the conversation moves during
    review, the sooner the pull request can be merged
- Merge your pull request into `main` once it has approval
  - Prefer squash merging with a good commit message. This helps us curate the
    history of `main`. Think about what you would want to know about this change
    if you're looking at it in the future.

Check our [style guide](STYLE_GUIDE.md) for more information.

## Tooling

The following are the tools we use in our development workflow.

### Git

[Git] is our version control tool. It lets us manage our changes to the project
over time as well as share our changes with each other through GitHub. It is 
highly recommended to use the CLI version of git as the desktop version has proven 
to be problematic with hooks.

#### Installation

Installation is relatively easy, but there are quite a few configuration steps.
If you're unfamiliar with git or its configuration ask for help.

To install go to [git's website][git] and download the installer. When its done,
run the installer and follow through the prompts. The installer will ensure you
have bash available to use alongside git as well.

Once it's installed, you'll likely have to configure your user information and
login credentials for GitHub.

Line endings are a typical issue for windows users of git. If you're using
windows, you can run the following commands to have git handle your line
endings.

```
git config --global core.autocrlf false
```

```
git config --global core.eol lf
```

### Node Package Manager

[npm] is our package manager. It lets us define command line tools and
their versions per project to keep everyone using compatible tooling.

#### Installation

Download the latest version of NodeJS from its [download page][nodejs releases].

Once this completes, open a terminal to the project directories with a package.json 
file and run the following command:

```
npm install
```

[nodejs releases]: https://nodejs.org/en/

### ESLint

[ESLint] is our code linter. It parses and statically analyzes our code for
common issues and errors so they get caught quickly and easily.

#### Installation

ESLint should be installed using [npm](#Node Package Manager). (Do not npm install direct 
packages, they are already included in the package.json dependencies!)

### Prettier

[Prettier] is our code formatter. It can automatically format and style our code,
which reduces time spent reorganizing code and bikeshedding.

#### Installation

Prettier should be installed using [npm](#Node Package Manager). (Do not npm install direct 
packages, they are already included in the package.json dependencies!)

### Husky

[Husky] is our hook system. It automatically runs scripts during certain git processes
such as commiting and pushing.

#### Installation

Husky should be installed using [npm](#Node Package Manager). (Do not npm install direct 
packages, they are already included in the package.json dependencies!)

### Recommended Extensions

The following aren't required, but you may find them useful during development.

- [Prettier] - Automatically formats the code, you can find the configuration we use in 
the .prettierrc and .prettierignore files.
- [Code Spell Checker] - Automatically lint spelling errors in code
- [Error Lens] - See lints right alongside the code
- [Git Graph] - View and interact with the git graph in the editor
- [GitHub Pull Requests and Issues] - Interact with GitHub from the editor
- [GitLens] - See git info right in the code (and much more)
- [indent-rainbow] - Makes the indentation level more readable
- [Live Share] - Work on code with team members in real time
- [Rewrap] - Wrap comments with a simple command

[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[code spell checker]: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
[error lens]: https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens
[git graph]: https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph
[github pull requests and issues]: https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github
[gitlens]: https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens
[indent-rainbow]: https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow
[live share]: https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare
[rewrap]: https://marketplace.visualstudio.com/items?itemName=stkb.rewrap
[issue]: https://github.com/Neura-Studios/NeuraOne-Game/issues
[pr]: https://github.com/Neura-Studios/NeuraOne-Game/pulls
[projects]: https://github.com/Neura-Studios/NeuraOne-Game/projects




