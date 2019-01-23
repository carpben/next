import { MIN_WIDTH_MQ } from "../consts/style"

export const getResponsiveLength: (property: string, base: number, scales: number) => string =
(property, base, scales) => `
	${property}: calc(${base}px + ${0.085 * scales}vw);
	${MIN_WIDTH_MQ[15]}{
		  ${property}: ${base + 1500 * (0.00085 * scales)}px;
	}
`
