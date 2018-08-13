# Postfix templates for Golang

forked from https://github.com/ipatalas/vscode-postfix-ts

Under development. Any suggestions are welcomed.

## Templates

All available templates (`expr` means the expression on which the template is applied):

| Template          | Outcome |
| -------:          | ------- |
| **.if**           | `if expr` |
| **.else**         | `if !expr` |
| **.nil**         | `if expr == nil` |
| **.notnil**      | `if expr != nil` |
| **.for**          | `for index, element := range expr` |
| **.return**       | `return expr` |
| **.var**          | `name := expr` |
| **.const**          | `const name type = expr` |
| **.append**          | `expr = append(expr, element)` |

## Author

Sota Yokoe [@croquette0212](https://twitter.com/croquette0212)