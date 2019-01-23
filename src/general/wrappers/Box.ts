import styled from "@emotion/styled"
import {IStyledComponentProps} from "../../general/types"

interface IProps extends IStyledComponentProps {
	innerRef?: React.RefObject<HTMLElement>
}

const Box = styled("div")( ({stl}: IProps) => stl)

export default Box
