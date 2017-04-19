# How to Contribute

Any pull-request without prior discussion with our team would be immediately discarded.

Or, it would stay in limbo for a while and eventually discarded.

So better discuss what you would like to work on with us [over here on Gitter](https://gitter.im/FreeCodeCamp/BackendChallanges).

## Branch Structure

This repository has an oddball branching structure. There would be one `staging` branch, as the default branch. This would have all the problems that we would want to put in FreeCodeCamp database.

The other branches should contain solution for each of the problems. These branches would be there (or will be there).
- `python-solution`
- `ruby-solution`
- `php-solution`
- `java-solution`
- `go-solution`
- `elixir-solution`
- `csharp-solution`

## How To Raise Pull Request

We would ideally like to test the solution for each problem with Travis CI. For this, we use native Travis CI language platform (as in, pre-installed Python or Java or Ruby runtime) as well as REPL API.

Since Travis CI doesn't support encrypted environment variables, and REPL API requires a secret token; we can only test pull requests from internal branches.

**No pull requests from external forks are supported**

Here are the instructions on how to contribute

- First, file an issue and inform us in the chatroom about the problem you wish to add, in which particular language.
- Second, label the issue with the language you are going to add the problem.
- Third, raise a PR adding the problem, that targets the staging branch.
- Fourth, raise another PR adding the solution, that targets the solution branch.

In each PR, refer to the other PR. Also, refer to the issue. If we merge, we would merge both the PRs, or we would reject both the PRs.
