# Backend Challenges [WIP]

[![Join the chat at https://gitter.im/FreeCodeCamp/Backend-Challenges](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/FreeCodeCamp/Backend-Challenges)

This contains the sample implementations for various standard problems to test the [REPL API](https://repl.it/api).

The implementations have to be in one of these languages or frameworks (in no particular order)
>- Python
- Java
- Go
- PHP
- Ruby
- Elixir
- .NET (C#)

Not all of these are supported on [REPL](https://repl.it/) at the moment; but for now, we are populating with code samples with the hope that it would be available in near future.

## Install & Run

```
npm install

npm test
```

## Run Tests

In this repo, we will accumulate all the backend challenges for the above mentioned languages. The individual testing instructions are given as follows.

### Python

```python
# Install pytest if not present
pip install pytest
# Run the tests
py.test
```

### REPL API Usage

The tests are run using [REPL API](https://repl.it/api/). It supports multiple languages, as long as the language is clearly specified from client side.

### Obtaining REPL API Secret

At this moment, we are sharing the REPL API secret key among a handful of contributors.

We are not entertaining requests to share it at the moment.

### Note to REPL API Secret Key Holders

You are not to share the API secret, or API token at any public forum or public chatroom, where others can easily obtain and use it without our consent.

If you absolutely have to share it with a fellow contributor, who for some reason has lost his/her copy of it - use private messaging or email to share the API secret.

**Do NOT** commit the API tokens as part of your `git commit`. You are supposed to export those values as environment variables and use the placeholders in committed code.

If you have mistakenly done so, you might want to remove and purge [such sensitive data](https://help.github.com/articles/remove-sensitive-data/).

### Contributions & Roadmap

We have developed an initial set of meta challenges required for Python in this [Google Doc](https://docs.google.com/document/d/1lNi2bKms52uMtvwxn3znnspz08UUwuSTMYXKDyiUd_k/edit). This note will serve as a roadmap of how we will proceed and contribute in this repo, not only for Python but for all backend languages.

#### Deliverables

The final UI framework, using [REPL.it](https://repl.it), will send to the repl server two sets of code concatenated, one the user snippet, and another the test code, and then would check for all tests passed in the returned answer. So, we need to deliver two things per challenge :

* The barebones code file, without solution
* The unit test file, testing the above

**Future Deliverables** : Add a [Wiki article](https://github.com/FreeCodeCamp/wiki) for every challenge

#### Development Plan

Each language directory has individual sub-directory for challenges, such as [python/001-hello-world](https://github.com/alayek/backend-challenges/tree/staging/python/001_hello_world). This directory will contain four files :

- `xxx_problem.xx` - The challenge code, containing the barebones but no solution
- `xxx_solution.xx` - The solution code to the challenge
- `xxx_test.xx` - The test cases to test the solution
- `xxx_question.md` - The problem statement document

Currently, the python development strategy has been setup and corresponding CI has been hosted in Travis. For all languages, we should first check the solution locally, which will ensure our test cases are ok, and then the same tests will be run in REPL enviroment, so as to make both challenge and tests REPL friendly. The file [test/repl.js](test/repl.js) takes care of the handling of python files for now, similar structure will be implemented for all other languages.

#### Local Development

- **Python** : Install the dependency (only pytest) from requirements.txt (`pip install -r requirements.txt`), and run `py.test` from any where in the repo. Contact us if you want to volunteer for REPL testing as well, we would then share the secret (only for core contributors).

**NB for Core Collaborators** : Open a branch directly in this repo to file a PR, as Travis does not allow secured
environment variables in external PR's for now.

Therefore, maintaining this structure, we can easily and parallely develop the challenges which will be delivered to the UI team for implementation.

### License

Copyright (c) 2016, Arijit Layek All Rights Reserved

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
