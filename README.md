#Inline Edit React component
Component displays value, but when clicked opens the value in text box for editing. Suports format and value validation.
**Depends on bootstrap.css**

```
#!javascript
import InlineEdit, {intParser, floatParser, emailParser, genericParser} from "./index";
<InlineEdit value="10.00" valueParser={floatParser} displayModeClassName="btn btn-success"
	onChange={(value)=>console.log("new int value is: " + value)}
		displayFormat={(value)=>numeral(value).format("0,0.00")}/>
React.render(widget, document.getElementById("container"));
```
Too see full sample take a look at <a href="demo.js">Demo sample</a></p>

You can click <a href="https://rawgit.com/dbencic/inline-edit/master/demo.html">Demo html page</a> here to see **example in action.**
Basically, component has 2 modes '*display*' in which values is only displayed (can be also formatted),
and *edit*, when value can be edited in textbox.

It is also possible to style the component in both modes by providing *displayModeClassName* and *editModeClassName*