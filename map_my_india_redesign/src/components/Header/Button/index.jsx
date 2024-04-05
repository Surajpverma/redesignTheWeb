// import { motion } from 'framer-motion';

// export default function Button({isActive, toggleMenu}) {
//   return (
//     <div className="relative top-0 right-0 w-100 h-16 cursor-pointer rounded-full overflow-hidden">
//         <motion.div 
//             className="relative w-full h-full"
//             animate={{top: isActive ? "-100%" : "0%"}}
//             transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1]}}
//         >
//             <div 
//                 className="w-full h-full bg-green-400 flex items-center justify-center"
//                 onClick={() => {toggleMenu()}}
//             >
//                 <PerspectiveText label="Menu"/>
//             </div>
//             <div 
//                 className="w-full h-full bg-black text-white flex items-center justify-center"
//                 onClick={() => {toggleMenu()}}
//             >
//                 <PerspectiveText label="Close" />
//             </div>
//         </motion.div>
//     </div>
//   )
// }

// function PerspectiveText({label}) {
//     return (    
//         <div className="perspectiveText flex flex-col justify-center items-center h-full w-full transform transform-style-preserve-3d transition-transform duration-750">
//             <p className="transition-all duration-750 uppercase pointer-events-none">{label}</p>
//             <p className="absolute bottom-0 transform origin-bottom-center rotate-x-90 translate-y-9 opacity-0 transition-all duration-750 uppercase pointer-events-none">{label}</p>
//         </div>
//     )
// }
import { motion } from 'framer-motion';
import styles from './style.module.scss';

export default function Button({isActive, toggleMenu}) {
  return (
    <div className={styles.button}>
        <motion.div 
            className={styles.slider}
            animate={{top: isActive ? "-100%" : "0%"}}
            transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1]}}
        >
            <div 
                className={styles.el}
                onClick={() => {toggleMenu()}}
            >
                <PerspectiveText label="Menu"/>
            </div>
            <div 
                className={styles.el}
                onClick={() => {toggleMenu()}}
            >
                <PerspectiveText label="Close" />
            </div>
        </motion.div>
    </div>
  )
}

function PerspectiveText({label}) {
    return (    
        <div className={styles.perspectiveText}>
            <p>{label}</p>
            <p>{label}</p>
        </div>
    )
}