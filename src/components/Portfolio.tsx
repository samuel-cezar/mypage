import { motion } from "motion/react"
import '../assets/Portfolio.css'
import santanderImage from '../assets/santander.jpg';
import datalakeSchema from '../assets/datalake-server.jpeg';
import internalRegulatory from '../assets/schematics.jpg'
import { Accordion } from "./ui/Accordion";

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
                    <img src={santanderImage} alt="Santander Landing Page I did as an intern back in 2021" />
                    <p>Building a Responsive and Accessible <a href="https://www.santander.com.br/hotsite/santanderfinanciamentos/">Hotsite</a> for Enhanced User Engagement. Developed a cutting-edge hotsite based on the client's innovative approach to online engagement.</p>
                    <Accordion
                        title="Technical Details"
                        themeColor="#cc0001"
                        content={(<p>The page was designed to be fully responsive, highly accessible, and optimized for performance, delivering a seamless user experience. Built using HTML, CSS, JavaScript, and jQuery, integrated with ASP.NET Razor Pages to ensure a robust and scalable solution.</p>)} />
                    <h2>Santander Landing Page (2021)</h2>
                </motion.div>
            </section>
            <section className="img-container">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <img src={datalakeSchema} />
                    <p>Developing a Comprehensive Top-Down Solution with a leading <a href="https://www.vortx.com.br/">Fintech company</a> for seamless top-down data analysis.</p>
                    <Accordion themeColor="#8e734a" title="Technical Details" content={(<p>Tackled the challenge of segregated data spread across market institutions, file handling systems, and legacy databases by consolidating and optimizing data processing workflows. Leveraged AWS Lambda and Node.js to create an efficient, serverless architecture that ensured real-time updates and data integrity.</p>)} />
                    <h2>Datalake Server (2022)</h2>
                </motion.div>
            </section>
            <section className="img-container">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <img src={internalRegulatory} />
                    <p>I worked with the Compliance Team to develop a Low-Code Frontend with AWS Lambda microservices, enabling real-time tracking of regulatory debts and predicting future debts with over 95% accuracy.</p>
                    {/* <Accordion themeColor="#8e734a" title="Technical Details" content={(<p>still writing this... :3</p>)} /> */}
                    <h2>Internal Regulatory Portal (2023)</h2>
                </motion.div>
            </section>
            {/* <section className="img-container">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <img src="https://images.unsplash.com/photo-1735542214686-a745d3684c39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <h2>Automatic Report Generator (2024)</h2>
                </motion.div>
            </section> */}
        </>
    )
}

