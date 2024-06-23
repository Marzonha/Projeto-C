import {Comments} from './Comments';
import style from './post.module.css';

export default function Post() {
  return (
    <article className={style.post}>

      <header>

        <div className={style.author}>

           <img src="https://cdn.pixabay.com/photo/2023/09/26/16/43/programmer-8277836_1280.jpg" alt="" />
           <div className={style.authorInfo}>

             <strong>Marlon Pacheco</strong>
             <span>Programador junior / Front-end  </span>

           </div>

        </div>

      </header>

      <div className={style.content}>
        
        <p>Sobre Você</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae harum exercitationem odit eaque veritatis, suscipit fugiat velit eum consequatur, aliquid tenetur consectetur quibusdam voluptas dolorum eos. Harum deleniti mollitia non?</p>

        <a href="https://github.com/Marzonha?tab=repositories">Link Repositórios</a>
        <a href="https://github.com/Marzonha/Projeto-react-01.git">Ultimo Projeto</a>
        
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
