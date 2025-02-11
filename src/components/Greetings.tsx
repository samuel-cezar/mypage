import { motion } from "motion/react"
import "../assets/Greetings.css"
export const Greetings = () => {
    return (
        <>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                <p>Hello! It's Sam!</p>
                <p>I'm so glad to have you around, wanna see something in particular?</p>
            </motion.div>
        </>
    )
}