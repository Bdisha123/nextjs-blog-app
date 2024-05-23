import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Stay Curious! </b>Discover stories, thinking, and expertise from writers on any topic.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt='' fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Learn! Create! Enjoy! Share!</h1>
                    <p className={styles.postDesc}>
                        Welcome to our vibrant blog, where fashion meets food, coding sparks innovation, style transcends boundaries, and travel opens new horizons. Dive into a rich tapestry of trends, flavors, code, flair, and adventures. Join us to share your own stories and insights</p>
                    <button className={styles.button}>Read more...</button>
                </div>
            </div>
        </div>
    )
}

export default Featured


// import React from "react";
// import styles from "./featured.module.css";
// import Image from "next/image";

// const Featured = () => {
//     return (
//         <div className={styles.container}>
//             <h1 className={styles.title}>
//                 <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
//             </h1>
//             <div className={styles.post}>
//                 <div className={styles.imgContainer}>
//                     <Image src="/p1.jpeg" alt="" fill className={styles.image} />
//                 </div>
//                 <div className={styles.textContainer}>
//                     <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
//                     <p className={styles.postDesc}>
//                         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                         Cupiditate, quam nisi magni ea laborum inventore voluptatum
//                         laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
//                         quisquam! Harum unde sit culpa debitis.
//                     </p>
//                     <button className={styles.button}>Read More</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Featured;