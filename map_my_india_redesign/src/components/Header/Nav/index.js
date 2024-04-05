// import { motion } from 'framer-motion';
// import { links, footerLinks } from './data';
// import { perspective, slideIn } from "./anim";

// export default function index() {
//   return (
//     <div className="flex flex-col justify-between p-20">
//        <div className="flex flex-col gap-10">
//         {
//             links.map( (link, i) => {
//                 const { title, href } = link;
//                 return (
//                     <div key={`b_${i}`} className="perspective-120 perspective-origin-bottom">
//                         <motion.div
//                           href={href}
//                           custom={i}
//                           variants={perspective}
//                           initial="initial"
//                           animate="enter"
//                           exit="exit"
//                           className="hover:opacity-75"
//                         >
//                             <a className="text-black text-4xl no-underline">
//                                 {title}
//                             </a>
//                         </motion.div>
//                     </div>
//                 )
//             })
//         }
//        </div>
//        <motion.div className="flex flex-wrap">
//             {
//                 footerLinks.map( (link, i) => {
//                     const { title, href } = link;
//                     return (
//                         <motion.a 
//                             variants={slideIn}
//                             custom={i} 
//                             initial="initial"
//                             animate="enter"
//                             exit="exit"
//                             key={`f_${i}`}
//                             href={href}
//                             className="w-1/2 mt-5"
//                         >
//                             {title}
//                         </motion.a>
//                     )
//                 })
//             }
//        </motion.div>
//     </div>
//   )
// }

import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { links, footerLinks } from './data';
import { perspective, slideIn } from "./anim";

export default function index() {
  return (
    <div className={styles.nav}>
       <div className={styles.body}>
        {
            links.map( (link, i) => {
                const { title, href } = link;
                return (
                    <div key={`b_${i}`} className={styles.linkContainer}>
                        <motion.div
                          href={href}
                          custom={i}
                          variants={perspective}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                        >
                            <a>
                                {title}
                            </a>
                        </motion.div>
                    </div>
                )
            })
        }
       </div>
       <motion.div className={styles.footer}>
            {
                footerLinks.map( (link, i) => {
                    const { title, href } = link;
                    return (
                        <motion.a 
                            variants={slideIn}
                            custom={i} 
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            key={`f_${i}`}
                        >
                            {title}
                        </motion.a>
                    )
                })
            }
       </motion.div>
    </div>
  )
}