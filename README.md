# Ryan's Next JS Template

[![Build and Test](https://github.com/rblackman/NextTemplate/actions/workflows/ci-build-test.yml/badge.svg)](https://github.com/rblackman/NextTemplate/actions/workflows/ci-build-test.yml)
[![CodeQL](https://github.com/rblackman/NextTemplate/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/rblackman/NextTemplate/actions/workflows/github-code-scanning/codeql)

This repository is my personal template for bootstrapping Next.JS projects.
It contains packages and baseline configurations for my most commonly used tools.
It is intended to get a project started quickly without spending hours setting up the environment.

## Tech Stack

### Front End Technology

This repository is based on [next.js][next] and is set up to use the App Router.
It is coded in [TypeScript][typescript].
It relies on minimal other front-end libraries:

1. **[recoil.js][recoil]**: For state management.
2. **[clsx][clsx]**: For class management.
3. **[client-only][client-only]/[server-only][server-only]** For component location enforcement.

Styles are handled using standard css modules.

### Linting

Several libraries are included to enforce coding styles and standards.
These are automatically enforced with [Husky][husky] hooks. (See [Husky](#husky) for more information.)

Code styles are enforced at commit time using [eslint][eslint] and [prettier][prettier]. [lint-staged][lint-staged] is used to run the linters.

Commit styles are enforced using [commitlint][commitlint]. See [Commit Styles](#commit-styles)

### Testing

Testing is done using [Jest][jest] and [testing-library]. Tests are run pre-push.

### Other

[Storybook][storybook] is configured for front-end component presentation.

## Husky

Husky is used to enforce pre-commit and pre-push hooks. See the below diagram for how and when these hooks are run.

### Pre Commit

```mermaid
sequenceDiagram
    actor D as Developer
    participant G as git/husky
    participant LS as lint-staged
    participant ES as eslint
    D->>G: git commit -m "..."
    activate G
    G->>LS: Call
    activate LS
    LS->>ES: Call
    activate ES
    ES->>ES: Lint
    ES->>LS: All Good
    deactivate ES
    deactivate LS
    LS->>G: All Good
    G->>D: Commit Succeeded
    deactivate G
```

### Pre Push

```mermaid
sequenceDiagram
    actor D as Developer
    participant G as git/husky
    participant N as node
    participant TS as TypeScript
    participant S as Server
    D->>G: git push
    activate G
    G->>N: Test
    activate N
    N->>N: jest --ci --coverage
    N->>G: All Good
    deactivate N
    G->>N: Build
    activate N
    N->>N: next build
    N->>G: All Good
    deactivate N
    G-->>S: Push
    G->>D: All Good
    deactivate G
```

## GitHub Actions

[GitHub Actions][actions]are used to automate various tasks related to the repository.

### CI - Build and Test

Any pull request into `main` will trigger a CI run.
This run will build the site and run tests.
If either the build or test fails, the action will fail.
If the CI run fails, merging will not be allowed.
See [GitHub Setup](#github-setup) for more information.

There is also an action to deploy StoryBook to our [GitHub Pages][pages] site.
This action runs when a PR is merged into main.

### Deploy Storybook

When a PR is successfully merged into main. The Deploy Storybook action runs.
This action builds Storybook and deploys it to the site's GitHub pages.

### Bundle Size Analysis

[nextjs-bundle-analysis][bundle] is used to track changes to the bundle size in Next.JS.
Configuration is found in the `nextBundleAnalysis` section of `package.json`.

### DependaBot Auto Merge and Approve

When Dependabot creates a PR, this action automatically approves it if status checks run.
If you are cloning this repo for a production critical application, consider disabling this action.

```mermaid
flowchart TD
    A(Local Code Changes on 'foo') -->|git push| B[Create Pull Request to 'main']
    B -->|trigger 'CI - Build and Test'| C{Success?}
    B -->|trigger 'Next.js Bundle Analysis'| BA(Report Bundle Size)
    C -->|yes| D[Merge Pull Request]
    C -->|no| A
    D -->|Trigger 'Deploy Storybook'| E{Success?}
    E -->|Yes| F(Storybook Deployed to GitHub Pages)
    E -->|No| G(Storybook NOT Deployed to GitHub Pages)
```

## GitHub Setup

There are a few changes that will need to be made to your repository if you use this repo as a template.

### Actions Setup

Go to _Settings > Actions > General_ and check _Allow GitHub Actions to create and approve pull requests_.

### GitHub Pages

GitHub Pages is used to host Storybook. Go to _Settings > Pages_. Under _Build and deployment_, set the _Source_ to _GitHub Actions_.

### Add branch protection rules

1. Go to _Settings > Rules > Rulesets_.
2. Click the down arrow next to _New ruleset_ and select _Import a ruleset_.
3. Select the `docs/Protect main.json` file.
4. Repeat the steps for `Protect development.json`.

![Screenshot of import button](docs/import-ruleset.png)

### Secret scanning

Secret scanning prevents secrets from accidentally being pushed to the repository.

Go to _Settings > Code security and analysis_. Enable _Secret scanning_ and _Push protection_

![Screenshot of the above secret scanning config.](docs/secret-scanning.png)

[actions]: [https://github.com/features/actions]
[bundle]: [https://github.com/hashicorp/nextjs-bundle-analysis]
[commitlint]: [https://commitlint.js.org/#/]
[client-only]: [https://www.npmjs.com/package/client-only]
[clsx]: [https://www.npmjs.com/package/clsx]
[eslint]: [https://eslint.org/]
[husky]: [https://www.npmjs.com/package/husky]
[jest]: [https://jestjs.io/]
[lint-staged]: [https://github.com/okonet/lint-staged/]
[next]: [https://nextjs.org/docs]
[pages]: [https://pages.github.com/]
[prettier]: [https://prettier.io/]
[recoil]: [https://recoiljs.org/]
[server-only]: [https://www.npmjs.com/package/server-only]
[storybook]: [https://storybook.js.org/]
[testing-library]: [https://testing-library.com/]
[typescript]: [https://www.typescriptlang.org/]
