import InlineEdit, {intParser, floatParser, emailParser} from "./index";
import React from "react";
import numeral from "numeral";

var widget = <div>
	<h3>Integer</h3>
	<InlineEdit value="1" valueParser={intParser}
		onChange={(value)=>console.log("new int value is: " + value)}/>
	<h3>Float</h3>
	<InlineEdit value="10.00" valueParser={floatParser}
		onChange={(value)=>console.log("new int value is: " + value)}
		displayFormat={(value)=>numeral(value).format("0,0.00")}/>
	<h3>Email</h3>
	<InlineEdit value="me@email.com" valueParser={emailParser}
		onChange={(value)=>console.log("new int value is: " + value)}/>
</div>

React.render(widget, document.getElementById("container"));