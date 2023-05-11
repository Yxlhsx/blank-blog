// import tailwindTypography from '@tailwindcss/typography'

// export default defineNuxtConfig({
//     tailwindcss: {
//         plugins: [tailwindTypography]
//     }
// })

import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {}
        }
    },
    plugins: [require('@tailwindcss/typography')]
}
