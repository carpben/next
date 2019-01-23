const MEDIA_SIZES: ReadonlyArray<number> =
   [0, 1, 2, 3, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700]

export const MAX_WIDTH_MQ: ReadonlyArray<string> =
   MEDIA_SIZES.map ( (width) => `@media screen and (max-width: ${width}px)`  )

export const MIN_WIDTH_MQ: ReadonlyArray<string> =
   MEDIA_SIZES.map ( (width) => `@media screen and (min-width: ${width + 1}px)`  )
