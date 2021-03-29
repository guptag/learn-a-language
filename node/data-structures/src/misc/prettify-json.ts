/*
Input : '{A:"B",C:{D:"E",F:{G:"H",I:"J"}}}'
Output :
'{
    A:"B",
    C:
    {
        D:"E",
        F:
        {
            G:"H",
            I:"J"
        }
    }
}'

Input : '["foo", {"bar":["baz",null,1.0,2]}]'
Output :
'[
    "foo",
    {
        "bar":
        [
            "baz",
            null,
            1.0,
            2
        ]
    }
]'
*/

export function prettifyJSON(inputStr: string): string {
  inputStr = inputStr.trim();
  const output = [];
  const indent = [];

  // handle "{", "}", "[", "]", ":", ","
  // '{', '[' -> Add new line, Add indent, Add char, add new line, push indent, add indent
  // "}", "]" -> add new line, pop indent, add indent, add char
  // ":" -> add char, if next char is '{", "[" add new line,
  // "," -> add char, add new line
  // default -> add char

  for (let index = 0; index < inputStr.length; index++) {
    const char = inputStr.charAt(index);
    // const nextChar =  index < inputStr.length - 1 ? inputStr.charAt(index + 1) : '';
    // if (index === 0) {
    // output.push('\n');
    // }

    switch (char) {
      case '{':
      case '[':
        output.push('\n');

        output.push(indent.join(''));
        output.push(char);
        output.push('\n');

        indent.push(' ');
        indent.push(' ');
        output.push(indent.join(''));
        break;
      case '}':
      case ']':
        output.push('\n');

        indent.pop();
        indent.pop();
        output.push(indent.join(''));

        output.push(char);
        break;
      case ',':
        output.push(char);
        output.push('\n');
        output.push(indent.join(''));
        break;
      case ':':
        output.push(':');
        // if (nextChar === '[' || nextChar === '{') {
        // output.push('\n');
        // }
        break;
      default:
        output.push(char);
        break;
    }
  }
  return output.join('');
}
