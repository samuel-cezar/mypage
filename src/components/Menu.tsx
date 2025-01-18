import { motion } from "motion/react";
import { Button } from "./ui/Button";
import '../assets/Menu.css'

interface MenuProps {
    navigateTo: Function;
}

export const Menu = ({ navigateTo }: MenuProps) => {
    return (
        <>
            <motion.div className="menu-container">
                <Button onTap={() => navigateTo('home')} textContent="Home" />
                <Button onTap={() => navigateTo('portfolio')} textContent="Portfolio" />
            </motion.div>
        </>
    );
};
