import style from './comments.module.css'


export function Comments() {
  return (
    <>
      <div className={style.comments}>
        <img src="https://senai2022.net.br/wp-content/uploads/2021/01/senai-inscricoes-2022.jpg" alt="" />
        <div>
          <div className={style.commentsContent}>
            <header>
              <div >
                <strong>Senai Curso Preparatório de Front-end  </strong>
              </div>
            </header>
            <p>Possuo conhecimentos na área de programação front-end (parte estética/aparência do site),
              dentro desse conhecimento possuo experiência em html, CSS, JavaScript e React.
              Junto com os outros alunos do Senai estamos fazendo um site para o iracambi,
              ong que busca o restauramento e o reflorestamento da mata atlântica.
            </p>
          </div>
        </div>
      </div>
      <div className={style.comments}>
        <img src="https://images.ctfassets.net/63bmaubptoky/HTB_RPXFxWaTm_1Q7WEwy0ilSrtNl0zZY5oNmDf8OVs/b4ba7fc87baa62ca5b066b0c31c4b96b/melhores-editores-video-gratuitos-BR-Capterra-Header.png" alt="" />
        <div>
          <div className={style.commentsContent}>
            <header>
              <div >
                <strong> Edição de videos </strong>
              </div>
            </header>
            <p>Sobre meus conhecimentos de edição por mais que não sejam adquiridos em cursos eu obtive minhas habilidades e a noção de como fazer os videos
              através da internet, tenho mais familiaridade com a edição por meio de celulares,
              mesmo com a limitação do aparelho pude comprir com meus projetos pessoais de maneira satisfatória e
              atualmente estou trabalhando junto a um amigo músico na parte do marketing fazendo os videos para divulção
              de uma música que irá sair ainda.                                    
            </p>
            <p> OBS: Estou migrando para o computador, para edições mais profissionais.</p>
          </div>
        </div>
      </div>

    </>
  )
}