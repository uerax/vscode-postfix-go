# Postfix templates for Golang

Forked from [vscode-postfix-go](https://github.com/yokoe/vscode-postfix-go)

![feature X](images/demo.gif)

Under development. Any suggestions are welcomed.

## Templates

All available templates (`expr` means the expression on which the template is applied):

| Template          | Outcome |
| -------:          | ------- |
| **.if**           | `if expr` |
| **.else**         | `if !expr` |
| **.nil**          | `if expr == nil` |
| **.nnil**         | `if expr != nil` |
| **.forr**         | `for index := range expr {}` |
| **.for**          | `for index, element := range expr {}` |
| **.fori**         | `for index := 0 ; index < len(expr); index++ {}` |
| **.forj**         | `for index := len(expr) - 1 ; index >= 0 ; index--` |
| **.return**       | `return expr` |
| **.const**        | `const name type = expr` |
| **.len**          | `len(expr)` |
| **.print**        | `fmt.Println(expr)` |
| **.printf**       | `fmt.Printf("%+v\n", expr)` |
| **.error**        | `errors.New("expr")` |
| **.struct**       | `type expr struct` |
| **.interface**    | `type expr interface` |
| **.switch**       | `switch expr` |
| **.func**         | `func (t *expr)` |
| **.exist**        | `if v, ok := expr; !ok {}` |


## Author

[uerax](https://github.com/uerax)

## Contributors

[Wesker](https://github.com/hentai121)
