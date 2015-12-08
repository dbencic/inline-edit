/**
 * value parsers are function which checks string for correct format,and then
 * if format is correct returns parsed value.
 * otherwise if format is not correct returns null. example, if we use floatParser
 * 12,34 would return float 12.34 , but 12.34c would return null
 */

let floatCheckRegex = /^[+]?\d*[\.,]?[\d]+$/;
let intCheckRegex = /^[+,-]?[0-9]+$/;
let emailRegex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

function floatParser(value) {
	value = value.trim();
	let floatnum = value.match(floatCheckRegex);//if there is no match result is null
	if (!floatnum) return null;
	value = value.replace(",", ".");
	return parseFloat(value);
}

function intParser(value) {
	value = value.trim();
	if (!intCheckRegex.test(value)) return null;
	return parseInt(value);
}

function emailParser(value) {
	value = value.trim();
	if (!emailRegex.test(value)) return null;
	return value;
}

function genericParser(value) {
	return value;
}

export {floatParser, intParser, emailParser, genericParser};
//by default does nothing
export default function(value) {
	return value;
}