import { motion } from "framer-motion";

type PageWrapperProps = {
    children: React.ReactNode;
};

export function PageWrapper({ children }: PageWrapperProps) {
    return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}   // começa invisível e levemente abaixo
      animate={{ opacity: 1, y: 0 }}    // aparece suavemente na posição normal
      exit={{ opacity: 0, y: -20 }}     // desaparece subindo
      transition={{ duration: 0.4 }}    // tempo da animação
    >
        {children}
    </motion.div>
    );
}