export const sidebarVariants = {
    hidden: { opacity: 0, x: -9 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            ease: 'easeInOut' as const,
            staggerChildren: 0.06,
        },
    },
};