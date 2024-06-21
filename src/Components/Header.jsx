import style from './header.module.css';

export default function Header() {
  return (
    <header className={style.header}>
        <div className={style.rotate}>
          <img  src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" alt="" />
        </div>

      <strong>Curriculo Eletronico</strong>
   </header>
  )
}
