# Backend Challenges [WIP]

[![Join the chat at https://gitter.im/FreeCodeCamp/BackendChallanges](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/FreeCodeCamp/BackendChallanges)

This contains the sample implementations for various standard problems to test the [REPL API](https://repl.it/api).

The implementations have to be in one of these languages or frameworks
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

node phantom-tester.js --port [port]
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

Once you have obtained the REPL API secret key, you can use that to generate API token and use that token. The steps are provided as follows:
- Execute the Ruby code in this [REPL snippet](https://repl.it/gZp/1). It would return a JSON output with two fields: `msg_mac` and `time_created`.
- Make a call to the REPL API like this
```html
<html>
    <head></head>
    <body>
        <h1>REPL TESTER </h1>
        <p><button onclick="test()">TEST</button></p>
        <h4>Output : </h4>
        <p class="output"></p>
        <script src="http://repl.it/lib/api.js"></script>
        <script>
        function test() {
            var token = {msg_mac: 'msg_mac', time_created: 000000000};
            var repl = new ReplitClient('api.repl.it', 80, 'python', token);
            repl.connect().then(
              function() { console.log('connected'); },
              function() { console.log('failed to connect'); }
            );
        }
        </script>
    </body>
</html>
```
Replace `msg_mac` and `time_created` with the values generated from the API.

Notice that each generated token expires in five days. It's recommended to create one token per user

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

Each language directory has individual sub-directory for challenges, such as [python/001-hello-world](https://github.com/alayek/backend-challenges/tree/staging/python/001_hello_world). This directory will contain two files, one `challenge.xx` containing barebones code, another `challenge.test.xx` containing unit test , where xx can be .py, .rb etc

Each language should have one separate branch in the repo. Like for python, it will be `python-solutions`, where we will keep only the solutions, while the barebones code will be in `staging` branch only. The solutions branch will contain **FULL** solution to those barebones `challenge.xx` file, such that we can unit test them locally. The tests will _pass_ in `python-solutions` branch but _fail_ in `staging` branch.

Therefore, maintaining this structure, we can easily and parallely develop the challenges which will be delivered to the UI team for implementation.

### License

Copyright (c) 2016, Arijit Layek All Rights Reserved

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.