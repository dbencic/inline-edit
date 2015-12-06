import React, {Component} from "react";
import numeral from "numeral";

class InlineEdit extends Component {

	constructor(props) {
		super();
		this.state = {edit: false, value: props.value};
	}

	componentWillReceiveProps(props) {
		this.setState({value: props.value, initialValue: props.value, edit: false, error: false});
	}

	componentWillMount() {
		this.setState({initialValue: this.props.value});
	}

	render() {
		let showEditor = this.state.edit || this.state.error;
		if (!showEditor) {
			return <a href="javascript:" className="btn btn-default" onClick={()=>this.editValueClicked()}>
				{(this.props.displayFormat)?this.props.displayFormat(this.state.value):this.state.value}</a>;
		}else {
			return this.getEditWidget(); 
		}
	}

	getEditWidget() {
		let inputClassName = "value-edit-text-input";
		if (this.state.error) {
			inputClassName += " error";
		}
		return <span><input type="text" ref="texbox" className={inputClassName} size="9"
			autoFocus="true" value={this.state.value} onChange={(e)=>this.onChangeEventHandler(e)} 
			onBlur={(event)=>this.editorBlured(event)} onKeyDown={(e)=>this.onKeyDownRoutine(e)}/>{" "}
			<big>{this.getEditIcon()}</big>
			</span>;
	}

	getEditIcon() {
		let iconClassName = "glyphicon glyphicon-ok-circle text-success";
		if (this.state.error) {
			iconClassName = "glyphicon glyphicon-remove-circle text-danger";
		}
		let icon = <i className={iconClassName} ariaHidden="true" onClick={()=>this.iconClicked()}
			alt={this.props.errorMessage} />;
		return icon;
	}

	iconClicked() {
		if (!this.state.error) return;
		this.escape();
	}

	escape() {
		this.setState({value: this.state.initialValue, error: false, edit: false});
	}

	getValue(value) {
		if (!this.props.valueParser) {
			throw "valueParser property (function that parses value into correct format) must be specified!";
		}
		return this.props.valueParser(value);
	}

	onKeyDownRoutine(e) {
		let keyCode = e.nativeEvent.keyCode;
		if (keyCode === 13) {
			this.editingFinished(this.getValue(e.target.value));
		}else if(keyCode == 27) {
			this.escape();
		}
	}

	/**
	 * handles change over state, not directly. This is prefered react way
	 */
	onChangeEventHandler(event) {
		let value = event.target.value;
		this.setState({value: value, error: !this.getValue(value)});
	}

	editorBlured(event) {
		this.editingFinished(this.getValue(event.target.value));
	}

	editValueClicked() {
		this.setState({edit: true, initialValue: this.state.value});//enters edit mode
	}

	editingFinished(value) {
		if (!value) return;
		this.setState({edit: false, value: value});
		this.props.onChange(value);
	}
}

InlineEdit.propTypes = {
	value : React.PropTypes.node.isRequired,
	onChange : React.PropTypes.func.isRequired,
	valueParser: React.PropTypes.func.isRequired,
	displayFormat: React.PropTypes.func,
	errorMessage: React.PropTypes.string
}

export default InlineEdit;