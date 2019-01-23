import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import * as React from "react"
import {IStyledComponentProps} from "../../general/types"
import Box from "./Box"

interface IconWProps extends IStyledComponentProps {
	icon: any
}

const IconW: React.SFC<IconWProps> = ({ icon, stl }) => {
   return (
		<Box stl={stl}>
			<FontAwesomeIcon icon={icon}/>
		</Box>
   )
}

export default IconW
