import { Comments } from './Comments';
import style from './post.module.css';

export default function Post() {
  return (
    <article className={style.post}>

      <header>

        <div className={style.author}>

          <img src="https://cdn.pixabay.com/photo/2023/09/26/16/43/programmer-8277836_1280.jpg" alt="" />
          <div className={style.authorInfo}>

            <strong>Marlon Pacheco de Oliveira</strong>
            <span>Programador junior / Front-end  </span>

          </div>

        </div>

      </header>

      <div className={style.content}>

        <p>Sobre Mim</p>
        <p>Sou um estudante e tenho 16 anos, atualmente no 2º ano do enino médio e fazendo curso preparatório no Senai,
           nascido em Muriaé-MG, além da área de programação que é algo que me agrada e tenho paixão por estar fazendo, 
           também essa paixão está presente na área de edição de videos que no começo era só um hobby.
        </p>

        <a href="https://github.com/Marzonha?tab=repositories">Link dos Repositórios</a>
        <a href="https://github.com/HectorG9/HBO-React.git">Ultimo Projeto</a>

      </div>

      <form action="">

        <strong >Experiências</strong>

      </form>
      <div>
        <Comments />
      </div>

    </article>

  )
}