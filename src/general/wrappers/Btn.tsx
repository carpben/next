import * as React from "react"
import styled, { StyledComponent } from "@emotion/styled"
import { IBtnWrapperPropsBasic, IStyledComponentProps } from "../../general/types"

const isRightClick: (e?: React.MouseEvent<HTMLElement>) => boolean =
   (e) => (e ? e.nativeEvent.which === 3 : false)

interface IButtonProps extends IStyledComponentProps {
	onMouseDown: () => void
}

const Button = styled("button")`
		padding: unset;
		background-color: unset;
		border: unset;
		label: atom-btn;
		:focus {
			outline: none;
		}
		${ ({stl}: IButtonProps) => stl }
	`

interface IProps extends IBtnWrapperPropsBasic{
	[k:string] : any
}

class Btn extends React.Component<IProps, {}> {

   public handleClickW: (e?: React.MouseEvent<HTMLElement>) => void  =
		(e) => {
			if (isRightClick(e)) {
			return
			} else {
			this.props.handleClick(e)
			}
		}

   public render() {
		const {handleClick, ...otherProps} = this.props
		return <Button onMouseDown={this.handleClickW} {...otherProps} />
   }

}

export default Btn
