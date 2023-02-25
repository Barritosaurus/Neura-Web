# Style Guide

If you're contributing to our code base, please follow our style guide. It helps
maintain the quality of our code and helps us work together.

We have a style guide to avoid arguments and bike shedding. There often isn't a
single right answer to how we write code, but consistency among developers is
important.

## Tooling

We use [Prettier] and [ESLint] to automatically format and lint our code. We
recommend installing these as well as extensions for your editor to make this
process seamless (if you ran `npm install` you already have these tools).

Any problems these tools identify should be considered part of our style guide,
and will typically not be mentioned any further in this guide.

## Git

Our git workflow should work not only as revision control, but as a productivity
tool. Our usage should help us collaborate, communicate, and get work done.

### Commit Messages

Our typical commit messages should be optimized for reviewing the individual
changes we make to the code. Our merge commit messages should describe the big
picture changes that are made and go into detail.

For the subject line:

- Use the present tense
- Use the imperative mood
- Capitalize the sentence
- Avoid ending the line with punctuation
- Avoid exceeding 50 columns

For the body:

- Fully explain the change made
- Capitalize each sentence
- Leave a blank line between the subject line and each paragraph
- Reference issues and pull requests where appropriate
- Use punctuation where appropriate
- Avoid exceeding 72 columns

### Branch Names

Our branch names should reference a type, an issue number, and provide a brief
indication of what the branch is for in the form `<type>-<issue>-<description>`.
It should look something like `feature-112-loot-dropping` or
`fix-55-ui-button-duplication`.

Branch names should typically have one of the following types:

- `fix` - for typical bug fixes
- `feature` - for new features
- `docs` - for documentation changes
- `test` - for test related activities
- `tooling` - for tooling related activities
- `hotfix` - for bug fixes that are critical and will applied to production
- `release` - for cutting new releases

### Pull Requests

A pull request should describe the smallest set of changes someone might want to
merge in to get a feature, fix, etc.

Our pull requests have templates to help with formatting. Be sure to follow them
and concisely, but accurately explain the changes being made. Include closing
keywords for related issues that the pull request will resolve.

Pull request names should summarize the set of changes being introduced, while
the rest of the description should elaborate on them.

### Whitespace

- Indent using tabs
- Keep lines under 100 columns
- Keep comments under 80 columns
- Trim end of line whitespace
- Include a new line at the end of a file
- Use a single blank line to indicate groups
- Include a blank line between functions
- Only include one statement per line
- Generally avoid vertically aligning code
- Try to keep comments on their own line

### Functions

- Avoid having too many function parameters
- Avoid returning more than one parameter (two at most)

These are indicators that a function should be broken up into more specific
functions.

### Naming

- Use [camel case] (either pascal case, e.g. `PascalCase`, or dromedary case,
  e.g. `dromedaryCase`) for all non-constant names, except where doing so would
  be prohibitive or confusing
  - Names intended to be global in scope should begin with a capital letter
    (pascal case), while names intended to be local should begin with a lower
    case letter (dromedary case)
  - For member names such as class methods, static members or members intended
    to be externally read only should begin with a lower case letter (dromedary
    case), while publicly accessible members should begin with a capital letter
    (pascal case)
    - By historical convention components should also begin with a capital
      letter (pascal case), since they're often used similarly to objects
      despite often being functions.
    - Avoid treating any members as private and/or prefixing them with an
      underscore. All members are public and this convention can lead developers
      to wrongly think about changes, especially regarding read access, tests,
      and breaking changes.
- Use screaming [snake case] (`SCREAMING_SNAKE_CASE`) for any names that are
  meant to be constant values
- For names that are intended to be unused, use the otherwise correct naming
  rules, but begin with an underscore (or use only an underscore)
- Generally capitalize only the first letter of initialisms, except when they
  are the first word of a name that would start with a lower case letter
  - `getHttp` rather than `getHTTP`
  - `jsonString` rather than `JSONString`

[prettier]: https://prettier.io/
[eslint]: https://eslint.org/
[camel case]: https://en.wikipedia.org/wiki/Camel_case
[snake case]: https://en.wikipedia.org/wiki/Snake_case
