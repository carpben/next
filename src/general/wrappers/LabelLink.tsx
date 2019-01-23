import * as React from "react"
import styled from "@emotion/styled"
import { Children, IStyledComponentProps, Stls } from "../../general/types"

const A = styled("a")`
	color: darkgreen;
	display: inline-block;
   ${ ( {stl}: IStyledComponentProps ) => stl }
`
interface IProps {
	children?: Children | string
	href: string
   stl?: Stls
}

const LabelLink: React.SFC<IProps> = ({children, ...otherProps}) => {
   return (
		<div>
			<A {...otherProps} > {children} </A>
		</div>
	)
}

export default LabelLink
