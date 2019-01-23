import { SerializedStyles } from "@emotion/core";

export type HandleClick = (event?: React.MouseEvent<HTMLElement>) => void

export type Children = JSX.Element | string | number | false | Array<JSX.Element | string >

export interface IWithChildren {
	children: Children
}

export interface IStyledComponentProps {
	stl?: Stls
}

export type Stl = SerializedStyles

// export type Stls = Stl | Array<Stl | undefined>

interface IStringObject {
	[k: string]: string
}

export type IMStringObject = Readonly<IStringObject>

export interface INumObject {
	[k: string]: number
}

export type IMNumObject = Readonly<INumObject>

interface IAnyObject {
	[k: string]: any
}

export type VoidFunction<T> = (x: T) => void

export type IMAnyObject = Readonly<any>

export type DR<T> =
	T extends Array<infer R> ? DeepReadonlyArray<R> :
	T extends Function ? T :
	T extends object ? DeepReadonlyObject<T> :
	T

interface DeepReadonlyArray<T> extends ReadonlyArray<DR<T>> {}

type DeepReadonlyObject<T> = {
	readonly [P in keyof T]: DR<T[P]>;
}

export type Stls = Stl | undefined | IStlArr

// export type Stls<T> =
// 	T extends Array<infer R> ? StlArr<R> :
// 	T extends String? "string" :
// 	T extends undefined? "undefined" :
// 	never

interface IStlArr extends Array<Stls> {}

export interface Dict<T> {
	[k: string]: T
}

export type AsyncFunc <I, O> = (inputs: I) => Promise<O>

export interface IBtnWrapperPropsBasic {
	handleClick: HandleClick
	stl?: Stls
	children?: Children
}

export type HtmlField = HTMLTextAreaElement|HTMLInputElement
