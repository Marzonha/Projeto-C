import style from './sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={style.sidebar}>

     <img className={style.cover} src="https://idocode.com.br/wp-content/uploads/2020/05/0-destaque-linguagens-de-programacao-2019.jpg" alt="" />

      <div className={style.profile}>

        <img className={style.avatar} src="https://cdn.pixabay.com/photo/2023/09/26/16/43/programmer-8277836_1280.jpg" alt="" />
        
        <strong>Seu nome</strong>
        <span>Cargo Pretendido</span>

      </div>

        <footer>

          <a href="">Seu GitHub</a>

        </footer> 

      </aside>
      
  )
}
