import InlineEdit, {intParser, floatParser, emailParser, genericParser} from "./index";
import React from "react";
import numeral from "numeral";

var widget = 
(<table className="table table-striped">
	<tbody>
		<tr>
			<th>Input value type</th>
			<th>Example</th>
		</tr>
		<tr>
			<td>Integer</td>
			<td><InlineEdit value="1" valueParser={intParser} displayModeClassName="btn btn-primary"
					onChange={(value)=>console.log("new int value is: " + value)}/></td>
		</tr>
		<tr>
			<td>Float</td>
			<td><InlineEdit value="10.00" valueParser={floatParser} displayModeClassName="btn btn-success"
					onChange={(value)=>console.log("new int value is: " + value)}
						displayFormat={(value)=>numeral(value).format("0,0.00")}/></td>
		</tr>
		<tr>
			<td>Email</td>
			<td><InlineEdit value="me@email.com" valueParser={emailParser}
					onChange={(value)=>console.log("new int value is: " + value)}/></td>
		</tr>
		<tr>
			<td>Raw value (every inpus is walid)</td>
			<td><InlineEdit value="Some free text" valueParser={genericParser} displayModeClassName="btn btn-success"
					onChange={(value)=>console.log("new raw value is: " + value)}/></td>
		</tr>
		<tr>
			<td>Custom parser: text length must be at least 5 characters</td>
			<td><InlineEdit value="more than 5 chars" valueParser={(text)=>(text.trim().length >= 5)?text.trim():null}
					onChange={(value)=>console.log("new custom value is: " + value)}/></td>
		</tr>
	</tbody>

</table>);

React.render(widget, document.getElementById("container"));