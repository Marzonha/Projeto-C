import style from './post.module.css';

export default function Post() {
  return (
    <article className={style.post}>

      <header>

        <div className={style.author}>

           <img src="https://cdn.pixabay.com/photo/2023/09/26/16/43/programmer-8277836_1280.jpg" alt="" />
           <div>

             <strong>Nome do Profissional</strong>
             <span>Cargo / Função</span>

           </div>

        </div>

      </header>

      <div>
        
        <p>Sobre Você</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae harum exercitationem odit eaque veritatis, suscipit fugiat velit eum consequatur, aliquid tenetur consectetur quibusdam voluptas dolorum eos. Harum deleniti mollitia non?</p>

        <p>Link Repositórios</p>
        <p>Ultimo Projeto</p>
      </div>

      <form action="">

       <strong>Experiencia</strong>

      </form>

    </article>
      
  )
}
