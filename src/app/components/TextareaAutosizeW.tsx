import React from "react"
import { HtmlField } from "../../general/types";
import TextareaAutosize from "react-autosize-textarea";

interface IProps {
	val:string
	fieldKey: string
	editField: (fieldKey:string, newVal:string) => void
}



class TextareaAutosizeW extends React.PureComponent<IProps> {
	htmlEl : HTMLElement | null = null 
	timeInterval : any

	editField = (e:React.ChangeEvent<HtmlField>) => {
		const val = e.target.value
		this.props.editField(this.props.fieldKey, val)
	}

	render () {
		return (
			<TextareaAutosize 
				className="textarea2"
				value = {this.props.val}
				onChange={this.editField}
				maxRows={14}
			/>
		)
	}
}


export default TextareaAutosizeW