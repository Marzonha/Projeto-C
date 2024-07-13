import style from './sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={style.sidebar}>

     <img className={style.cover} src="data:image/jpeg;base64,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" alt="" />

      <div className={style.profile}>

        <img className={style.avatar} src="https://cdn.pixabay.com/photo/2023/09/26/16/43/programmer-8277836_1280.jpg" alt="" />
        
        <strong>Marlon Pacheco de Oliveira</strong>
        <span>Programador Junior</span>

      </div>
 
        <footer>
           <a href="https://github.com/Marzonha">Seu GitHub</a>


          <img src="https://media.licdn.com/dms/image/D5612AQGvsUSedZ4U3g/article-inline_image-shrink_1000_1488/0/1705513570360?e=1723680000&v=beta&t=m3QQ94cNgpU6BmdUwjdXcvj-rm7P6M3Eu58lwQInlx4" alt="" />

        </footer>

      </aside>
      
  )
}