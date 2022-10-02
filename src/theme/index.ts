import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    customTheme: {
        fonts: {
            heading: `'DM Sans', sans-serif`,
            body: `'Inter', sans-serif`,
        },
    }
})

export default theme;