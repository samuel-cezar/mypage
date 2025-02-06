import { motion } from "motion/react"

interface ButtonProps {
    textContent: string;
    onTap: Function;
}

export const Button = ({ textContent, onTap }: ButtonProps) => {
    return (
        <motion.button
        onClick={() => onTap()}
            initial={false}
            whileHover={{
                backgroundColor: '#999',
                color: '#333',
                border: '1px solid #333',
                transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
        >
            {textContent}
        </motion.button>
    )
}