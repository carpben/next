import React, { Component } from "react"
import { IWithChildren, IStyledComponentProps, Children } from "../types";
import Tooltip from "../components/Tooltip";
import Box from "./Box";
import { css } from "@emotion/core";
import { isMobile } from "react-device-detect";
import { $Values } from "utility-types";

export const MODES = {
	UNCONTROLLED: 0,  
	SHOW: 1, 
	HIDE: 2
}

interface IProps extends IWithChildren, IStyledComponentProps{
	tooltipChild: Children
	isRight?:boolean
	isLeft?: boolean
	isTop?: boolean
	isBottom?: boolean
	mode?: $Values<typeof MODES>
}

interface IState {
	showTooltip:boolean
}

class WithToolTip extends Component<IProps, IState> {
	public static defaultProps = {
		mode: MODES.UNCONTROLLED, 
  };
	state = {showTooltip:false}
	show = () => this.setState({showTooltip:true})
	hide = () => this.setState({showTooltip:false})
	showForABit = () => {
		this.show()
		setTimeout(
			() => this.hide(), 
			5000
		)
	}


	render(){
		const isHorizontallyMiddle = this.props.isLeft===this.props.isRight
		const isVerticallyMiddle = this.props.isTop===this.props.isBottom
		const isCompletelyCentered = isHorizontallyMiddle && isVerticallyMiddle
		const stlz = {
			tooltipW: css`
				position: absolute;
				width: 0; 
				height: 0;

				${
					isHorizontallyMiddle ? `
						left: 0; 
						right: 0; 
						margin: auto;
					`
					: this.props.isRight? "right:-5px;" 
					: "left: -5px;"
				}
				${
					isVerticallyMiddle? `
						top: 0; 
						bottom: 0; 
						margin: auto;
					` 
					: 	this.props.isBottom? "bottom:-5px;" 
					: "top:-5px;"
				}
			`,
			tooltip: css`
				position:absolute; 
				z-index: 1000;
				${
					isHorizontallyMiddle ? 
						`left: 50%;
						-webkit-transform: translateX(-50%);
						transform: translateX(-50%);
						`
					: this.props.isRight?"left:0;" 
					: "right: 0;"
				}
				${
					isVerticallyMiddle? `
						top: 50%;
						-webkit-transform: translateY(-50%);
						transform: translateY(-50%);
						
					`
					: this.props.isBottom? "top:0;" : 
					"bottom:0;"
				}

				${isCompletelyCentered? "transform: translate(-50%, -50%);" : null }
				${this.props.stl}

			`
		}
		return (
			<Box
				stl={styl}
				onMouseEnter={isMobile? undefined : this.show}
				onMouseLeave={isMobile? undefined : this.hide}
				onTouchStart={isMobile? this.showForABit : undefined }
			>
				{this.props.children}
				
				{
					((this.props.mode === MODES.SHOW) || ((this.props.mode === MODES.UNCONTROLLED) &&  this.state.showTooltip)) 
					&& (
						<Box stl={stlz.tooltipW}>
							{
								typeof this.props.tooltipChild === "string" ? (
									<Tooltip
										text={this.props.tooltipChild}
										stl={stlz.tooltip}
									/>
								) : 
									<Box stl={stlz.tooltip}>
										{this.props.tooltipChild}
									</Box>
							}

						</Box>
					)
				}
			</Box>
		)
	}
}

const styl = css`
		position: relative; 
	`


export default WithToolTip