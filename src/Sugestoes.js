export default function Sugestoes() {
    const listaSugestoes = [
        { link: './imagens/badvibesmemes 1.png', usuario: 'bad.vibes.memes', seguidor: 'Segue Você' },
        { link: '../imagens/chibirdart 1.png', usuario: 'chibirdart', seguidor: 'Segue Você' },
        { link: './imagens/razoesparaacreditar 1.png', usuario: 'razoesparaacreditar', seguidor: 'Novo no Instagram' },
        { link: './imagens/adorableanimals 1.png', usuario: 'adorable_animals', seguidor: 'Segue Você' },
        { link: './imagens/smallcutecats 1.png', usuario: 'smallcutecats', seguidor: 'Segue Você' }
    ]

    function Sugestao(props) {
        return (
            <div class="caixa-sugestoes">
                <div class="caixa-sugestoes-usuario">
                    <img src={props.link} />

                    <div class="caixa-sugestao-nome">
                        <p>{props.usuario}</p>
                        <p>{props.seguidor}</p>
                    </div>
                </div>
                <p>Seguir</p>
            </div>
        )
    }

    return (
        <>
            {listaSugestoes.map((l) => <Sugestao link={l.link} usuario={l.usuario} seguidor={l.seguidor} />)}
            <p class="sobre">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags •
                Idioma</p>

            <p class="sobre">© 2021 INSTAGRAM DO FACEBOOK</p>
        </>
    )
}