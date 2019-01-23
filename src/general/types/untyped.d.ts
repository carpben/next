interface IScrollLockProps {
	accountForScrollbars?: boolean,
	touchScrollTarget?: HTMLElement
}

declare module "react-scrolllock" {
	const ScrollLock: new () => React.SFC<IScrollLockProps>
	export = ScrollLock
}
