import { position } from '@chakra-ui/react';
import style from './footer.module.css';


export default function Footer() {
  return (
    <footer className={style.footer}>

        <div className={style.slider}>

           <div className={style.list}>

            <div className={style.item1}><img src="img/slider1_1.png" alt="" /></div>
            <div className={style.item2}><img src="img/slider1_2.png" alt="" /></div>
            <div className={style.item3}><img src="img/slider1_3.png" alt="" /></div>
            <div className={style.item4}><img src="img/slider1_4.png" alt="" /></div>
            <div className={style.item5}><img src="img/slider1_5.png" alt="" /></div>
            <div className={style.item6}><img src="img/slider1_6.png" alt="" /></div>
            <div className={style.item7}><img src="img/slider1_7.png" alt="" /></div>
            <div className={style.item8}><img src="img/slider1_8.png" alt="" /></div>
            <div className={style.item9}><img src="img/slider1_9.png" alt="" /></div>
            <div className={style.item10}><img src="img/slider1_10.png" alt="" /></div>

           </div>

        </div>
    </footer>
  )
}