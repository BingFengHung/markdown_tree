let markdown = `# OpenDocuments
My technical documents

## .NET
### C#
- [C# Lazy 延遲物件實例化](https://github.com/BingFengHung/OpenDocuments/blob/main/C%23/C%23%20Lazy%20%E5%BB%B6%E9%81%B2%E7%89%A9%E4%BB%B6%E5%AF%A6%E4%BE%8B%E5%8C%96/C%23%20Lazy%20%E5%BB%B6%E9%81%B2%E7%89%A9%E4%BB%B6%E5%AF%A6%E4%BE%8B%E5%8C%96.md)
- [C# BeginInvoke vs Invoke](https://github.com/BingFengHung/OpenDocuments/blob/main/C%23/C%23%20BeginInvoke%20vs%20Invoke/C%23%20BeginInvoke%20vs%20Invoke.md)
- [C# @ 的使用方法](https://github.com/BingFengHung/OpenDocuments/blob/main/C%23/C%23%20%40%20%E7%9A%84%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95/C%23%20%40%20%E7%9A%84%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95.md)
- [C# 在多執行緒下確保只有一個物件實例化](...)
- [C# sbyte 陣列轉為 string](https://github.com/BingFengHung/OpenDocuments/blob/main/C%23/C%23%20sbyte%20%E9%99%A3%E5%88%97%E8%BD%89%E7%82%BA%20string/C%23%20sbyte%20%E9%99%A3%E5%88%97%E8%BD%89%E7%82%BA%20string.md)
- [C# MD5 加密字串](https://github.com/BingFengHung/OpenDocuments/blob/main/C%23/C%23%20MD5%20%E5%8A%A0%E5%AF%86%E5%AD%97%E4%B8%B2/C%23%20MD5%20%E5%8A%A0%E5%AF%86%E5%AD%97%E4%B8%B2.md)

### Xamarin.Forms

## JavaScript

## Python

## Others

`

let splitMarkdown = markdown.split('\n')

let tree = {}

function findPrevious(current, key) {
    let idx = splitMarkdonw.indexOf(current);
    let lastArr = splitMarkdown.slice(0, idx);
    let lastElement = findLast(lastArr, (item) => item.startsWith(key));
    return lastElement;
}

function findLast(array, predicate) {
	for (let i = array.length - 1; i >= 0; --i) {
		const x = array[i];

		if (predicate(x)) {
			return x;
		}
	}
}

splitMarkdown.forEach(el => {
    if (el.startsWith('# ')) {
        tree[el] = {}
    } else if (el.startsWith('## ')) {
        let lastElement = findPrevious(el, '# ')
        //console.log('last' + lastElement)
        tree[lastElement][el] = {}
        //console.log(tree)
    } else if (el.startsWith('### ')) {
        let lastElement2 = findPrevious(el, '## ')
        let lastElement = findPrevious(lastElement2, '# ')
       
        tree[lastElement][lastElement2][el] = {}
       
    }
     else if (el.startsWith('-')) {
        let lastElement3 = findPrevious(el, '### ');
        let lastElement2 = findPrevious(el, '## ');
        let lastElement = findPrevious(el, '# ');
        
        if (!tree[lastElement][lastElement2][lastElement3]['_']) {
            tree[lastElement][lastElement2][lastElement3]['_'] = []
            console.log('indexOf')
        }

        tree[lastElement][lastElement2][lastElement3]['_'].push(el);
        //console.log(tree[lastElement][lastElement2][lastElement3])
    }
})

console.log(tree)