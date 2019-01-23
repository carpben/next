import React from "react"
import { HtmlField } from "../../general/types";
import TextareaAutosize from "react-autosize-textarea";
import { Editor } from 'slate-react'
import { Value } from 'slate'

interface IProps {
	val:string
	fieldKey: string
	editField: (fieldKey:string, newVal:string) => void
}

interface IState {
	val:  string
}

// const initialValue = Value.fromJSON({
// 	document: {
// 	  nodes: [
// 		 {
// 			object: 'block',
// 			type: 'paragraph',
// 			nodes: [
// 			  {
// 				 object: 'text',
// 				 leaves: [
// 					{
// 					  text: 'A line of text in a paragraph.',
// 					},
// 				 ],
// 			  },
// 			],
// 		 },
// 	  ],
// 	},
//  })

class TextareaAutosizeW extends React.PureComponent<IProps, IState> {
	htmlEl : HTMLElement | null = null 
	timeInterval : any
	// constructor(props:IProps){
	// 	super(props)
	// 	const newVal : string = this.props.val==="" ? initialValObj : this.props.val
	// 	this.state = { val: (newVal)  }

	// }

	// editField = (e:React.ChangeEvent<HtmlField>) => {
	// 	const val = e.target.value
	// 	this.props.editField(this.props.fieldKey, val)
	// }

	// handleChange = ({ newVal }:{newVal:any}) => {
	// 	this.setState({val: newVal})
	//  }



	render () {
		return (null)
		// 	<Editor 
		// 		className="textarea2"
		// 		value={this.state.val} 
		// 		onChange={this.handleChange} 
		// 		maxRows={14}
		// 	/>
		// )
	}
}


export default TextareaAutosizeW