import {Comments} from './Comments';
import style from './post.module.css';

export default function Post() {
  return (
    <article className={style.post}>

      <header>

        <div className={style.author}>

           <img src="https://cdn.pixabay.com/photo/2023/09/26/16/43/programmer-8277836_1280.jpg" alt="" />
           <div className={style.authorInfo}>

             <strong>Nome do Profissional</strong>
             <span>Cargo / Função</span>

           </div>

        </div>

      </header>

      <div className={style.content}>
        
        <p>Sobre Você</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae harum exercitationem odit eaque veritatis, suscipit fugiat velit eum consequatur, aliquid tenetur consectetur quibusdam voluptas dolorum eos. Harum deleniti mollitia non?</p>

        <a>Link Repositórios</a>
        <a>Ultimo Projeto</a>
        
      </div>

      <form action="">

       <strong>Experiencia</strong>

      </form>
      <div>
       <Comments/>
      </div>

    </article>
      
  )
}
