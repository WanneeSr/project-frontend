export default defineAppConfig({
    ui: {
        input: {
            compoundVariants: [
                {
                    color: 'primary',
                    variant: 'outline',
                    class: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-700'
                },
            ]
        },
        button: {
            compoundVariants: [
                {
                    color: 'primary',
                    variant: 'outline',
                    class: 'ring ring-inset ring-violet-700/50 text-violet-700 hover:bg-violet-700/10 active:bg-violet-700/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700'
                },
                {
                    color: 'primary',
                    variant: 'solid',
                    class: 'ring ring-inset ring-violet-700/50 text-violet-700 hover:bg-violet-700/10 active:bg-violet-700/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700'
                },
                {
                    color: 'primary',
                    variant: 'ghost',
                    class: 'ring ring-inset ring-violet-700/50 text-violet-700 hover:bg-violet-700/10 active:bg-violet-700/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700'
                },
            ]
        }
    }
})