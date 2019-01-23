import React from "react"
import Box from "../wrappers/Box";
import { IStyledComponentProps } from "../types";
import { css } from "@emotion/core";

interface IProps extends IStyledComponentProps{
	text: string
}

const Tooltip: React.SFC<IProps> = 
	({stl, text}) => {
		const styl = css`
			background-color: rgba(0,0,0,0.8);
			padding: 15px 25px ; 
			color: white; 
			border-radius: 10px;
			min-width: 270px; 
			${stl}
		`
		return (
			<Box stl={styl}>
				{text}
			</Box>
		)
	}

export default Tooltip