import styles from './app.module.css';
import'./styles.global.css'
import'./app.module.css'  

import Header from './Components/Header'
import Post from './Components/Post'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer';


export default function App() {
  return (
    <>
     <div>
       <Header/>
      
       <div className={styles.wrapper}>
         <Sidebar/>
         <main>
          <Post/>
         </main>

        <Footer/>

       </div>

     </div>

    </>
  
  )

}    