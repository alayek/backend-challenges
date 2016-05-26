import hello_world as pb
import sys
import StringIO

def test_hello_world():
  stdout = sys.stdout
  result = StringIO.StringIO()
  sys.stdout = result
  pb.print_hello()
  sys.stdout = stdout
  output = result.getvalue()
  assert output == "Hello World\n"
