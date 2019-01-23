import { faTimes } from "@fortawesome/free-solid-svg-icons"
// import {VoidFunction} from "../../../../general/types"
// import * as ScrollLock from 'react-scrolllock'
// import IScrollLockProps from "../../../../general/types/untyped"
// const ScrollLock: React.SFC<IScrollLockProps> = require("react-scrolllock").default;
// import { disableBodyScroll } from 'body-scroll-lock';
// @ts-ignore
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import * as React from "react"
import {css} from "@emotion/core"
// import TimesBtn from "../../projects/search/components/1/TimesBtn"
import { Dict, Stl } from "../types"
import Box from "./Box"
import Btn from "./Btn"
import IconW from "./IconW"

const styles = {
	toMainBox: css`
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgba(255, 255, 255, 0.96);
		width: 100%;
		height: 100%;
		z-index: 1000;
		box-sizing: border-box;
	`,
	toCloseBox: css`
		label: close-box;
		position: fixed;
		top: 0 ;
		left: 0;
		/* width: 100%; */
		right: 0;
		height: 40px;
		display: flex;
		width: 100%;
		>div {
			margin: auto;
			font-size: 17px;
			font-weight: 500;
		}
	`,
	toXBtn: css`
		font-size: 20px;
	`,
	toChildrenW: css`
		position: fixed;
		top: 40px;
		bottom: 0;
		right: 0;
		left: 0;
		overflow: scroll;
		z-index:2000;
		padding: 0px 5px 5px;
	`,
}

interface IModalWProps {
	toggleModal: ()  => void
	stl: Dict<Stl>
	children: JSX.Element[] | JSX.Element
}

class ModalW extends React.Component<IModalWProps, {}> {
	public modalRef: React.RefObject<HTMLElement> = React.createRef()

	public componentDidMount = () => {
		disableBodyScroll(this.modalRef.current, {reserveScrollBarGap: true})
	}

	public componentWillUnmount = () => {
		clearAllBodyScrollLocks()
	}

	public render() {
		const {toggleModal, stl, children, ...props} = this.props
		return (
			<Box stl={[styles.toMainBox, stl.modal]} {...props} >
				<Btn stl={styles.toCloseBox} handleClick={toggleModal} >
					<div>Close <IconW icon={faTimes} stl={css`display:inline;`} /></div>
				</Btn>
				<Box stl={[styles.toChildrenW, stl.childrenW]} innerRef={this.modalRef}>
					{children}
				</Box>
			</Box>
		)
	}
}

export default ModalW
