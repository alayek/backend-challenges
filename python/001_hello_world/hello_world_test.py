from hello_world_solution import print_hello
# The above import should be removed before sending it to Repl
import sys
try:
    from StringIO import StringIO
except:
    from io import StringIO

def test_hello_world():
  stdout = sys.stdout
  result = StringIO()
  sys.stdout = result
  print_hello()
  sys.stdout = stdout
  output = result.getvalue()
  assert output == "Hello World\n"

## Last line of file should have the testing method signature for Repl to run it
## $$TEST_METHOD$$
## test_hello_world()
