# markdown_tree
Convert markdown to tree structure

Simple read markdown tag to tree structure (using JavaScript dictionary)

Structure like:
`#`、`##`、`###` as dictionary key
`node` as dictionary value

```js
{
	"#": {
		"##": {
			"###": {

			},
			"node": {

			}
		}, 
		"node" {

		}
	}
}
```