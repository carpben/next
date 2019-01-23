import * as React from "react"
import {css} from "@emotion/core"
import { capitalizeFirstLetter } from "../tools"
import {IStyledComponentProps} from "../../general/types"
import Box from "./Box"

interface ILabelProps extends IStyledComponentProps {
   str: string
}

const Label: React.SFC<ILabelProps> = ({ str, stl }) => {
   stl = css`
      label: atom-label;
      ${stl}
   `
   return (
		<Box stl={stl}>
			{capitalizeFirstLetter(str)}
		</Box>
   )
}

export default Label
