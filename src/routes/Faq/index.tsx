export default function Faq() {
    return (
        <main>
            <section className="sec-faq">
                <h2 className="color2">Perguntas frequentes</h2>
                <div className="faq">
                    <div className="pergunta">
                        <h3>Como faço para acessar a teleconsulta?
                        </h3>
                    </div>
                    <div className="resposta">
                        <p>Dentro do <a href="https://portaldopaciente.hc.fm.usp.br/teleconsulta">portal do Hospital das Clinicas</a> procure no menu a esquerda a opção "teleconsulta". </p>
                    </div>
                </div>
                <div className="faq">
                    <div className="pergunta">
                        <h3>Como imprimir meus resultados?</h3>
                    </div>
                    <div className="resposta">
                        <p>Dentro do <a href="https://portaldopaciente.hc.fm.usp.br/resultados">portal do Hospital das Clinicas</a> procure no menu a esquerda a opção "Minhas receitas" em seguida, no canto esquerdo superiror da tela, clique em “Imprimir”.</p>
                    </div>
                </div>
                <div className="faq">
                    <div className="pergunta">
                        <h3>Como consigo conferir minhas receitas?</h3>
                    </div>
                    <div className="resposta">
                        <p>Dentro do <a href="https://portaldopaciente.hc.fm.usp.br/receitas">portal do Hospital das Clinicas</a> procure no menu a esquerda a opção "Minhas receitas". </p>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <h2>Envie-nos sua pergunta</h2>
                    <div>
                        <form id="formPerg">
                            <div>
                                <label htmlFor="idNome">Nome:</label>
                                <input type="text" name="nome" id="idNome" placeholder="Digite o seu nome" />
                            </div>
                            <div>
                                <label htmlFor="idCelular">Número do Celular:</label>
                                <input type="tel" name="celular" id="idCelular" placeholder="Digite o número do celular" />
                            </div>
                            <div>
                                <label htmlFor="idEmail">Email:</label>
                                <input type="text" name="email" id="idEmail" placeholder="Digite o seu email" />
                            </div>
                            <div>
                                <label htmlFor="idAssunto">Assunto:</label>
                                <select name="assunto" id="idAssunto">
                                    <option value="saude">Saúde</option>
                                    <option value="aplicativoHC">Aplicativo HC</option>
                                    <option value="aplicativoSA">Aplicativo Saúde Amiga</option>
                                    <option value="assistente-virtual">Assistente Virtual</option>
                                    <option value="site">Site</option>
                                    <option value="oficinas">Oficinas</option>
                                    <option value="outros">Outros</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="idPergunta">Pergunta:</label>
                                <input type="text" name="pergunta" id="idPergunta" placeholder="Digite sua pergunta" />
                            </div>
                            <div>
                                <button type="submit" id="botaoEnviar" className="botaoenviar">Enviar Pergunta</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>

    )
}