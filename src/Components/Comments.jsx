import style from './comments.module.css'


export function Comments() {
  return (
    <div className={style.comments}>
     <img src="" alt="" />
      <div>
        <div className={style.commentsContent}> 
            <header>
               <div >
                 <strong>Experiencia 1</strong>
               </div>
            </header>
            <p>Insira sua Experiencia</p>
        </div>
      </div>
    </div>
  )
}
