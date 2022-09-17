function Storie(props) {
    return (
        <li class="storie">
            <div class="borda">
                <div class="foto">
                    <img src={props.link} alt={`logo de ${props.nome}`}/>
                </div>
            </div>
            <p>{props.nome}</p>
        </li>
    )
}

export default function Stories() {
    const listaStories = [
        { nome: '9gag', link: '/imagens/9gag 1.png' },
        { nome: 'meowed', link: '/imagens/meowed 1.png'},
        { nome: 'barked', link: "./imagens/barked 1.png"},
        { nome: 'nathanwpyle...', link: './imagens/nathanwpylestrangeplanet 1.png'},
        { nome: 'wawawiwac...', link: './imagens/wawawiwacomicsa 1.png'},
        { nome: 'respondeai', link: './imagens/respondeai 1.png'},
        { nome: 'filomoderna', link: './imagens/filomoderna 1.png'},
        { nome: 'memeriago.', link: './imagens/memeriagourmet 1.png'},
    ]

    return (
        <ul class="caixa-storie">
            {listaStories.map((l) => <Storie nome={l.nome} link={l.link}/>)}
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </ul>
    )
}