import { motion } from "motion/react"

export const Greetings = () => {
    return (
        <>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                Hello! It's Sam!
            </motion.div>
        </>
    )
}