import { motion } from "motion/react"
import '../assets/Portfolio.css'

export const Portfolio = () => {
    return (
        <>
            <section className="img-container">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} id="intro">
                    <h2>Portfolio</h2>
                    <p>Just so we can get to know each other ;)</p>
                </motion.div>
            </section>
            <section className="img-container">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <img src="https://images.unsplash.com/photo-1735542214686-a745d3684c39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <h2>Santander Landing Page (2021)</h2>
                </motion.div>
            </section>
            <section className="img-container">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <img src="https://images.unsplash.com/photo-1735542214686-a745d3684c39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <h2>Datalake Server (2022)</h2>
                </motion.div>
            </section>
            <section className="img-container">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <img src="https://images.unsplash.com/photo-1735542214686-a745d3684c39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <h2>Internal Regulatory Portal (2023)</h2>
                </motion.div>
            </section>
            <section className="img-container">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <img src="https://images.unsplash.com/photo-1735542214686-a745d3684c39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <h2>Automatic Report Generator (2024)</h2>
                </motion.div>
            </section>
        </>
    )
}

