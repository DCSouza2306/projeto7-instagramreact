import React from "react"



export default function Posts() {
    const [usuarioClicado, setUsuario] = React.useState('');

    const listaUsuarios = []

    function Post(props) {
        function foiClicado(user) {
            const novoUsuario = true;
            setUsuario(novoUsuario);

        }
        return (
            <div class="post">
                <div class="barra-topo">
                    <div class="usuario-icone">
                        <img src={props.icone} alt={`icone de ${props.nomeUsuario}`} />
                        <p>{props.nomeUsuario}</p>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <img class="imagem-post" src={props.imagem} alt={`postagem de ${props.nomeUsuario}`} />
                <div class="barra-inferior">
                    <div class="barra-icones">
                        <div class="barra-icones-esquerdo">
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <ion-icon onClick={foiClicado} name={(usuarioClicado)?'bookmark':'bookmark-outline'}></ion-icon>
                    </div>
                    <div class="barra-curtidas">
                        <img src={props.curtida} alt={`icone de ${props.nomeUsuario}`} />
                        <p>Curtido por <strong>{props.usuarioCurtida}</strong> e outras {props.numeroCurtidas} pessoas</p>
                    </div>
                </div>
            </div>
        )
    }

    const listaPosts = [
        {
            id: '1',
            icone: './imagens/meowed 1.png',
            usuario: 'meowed',
            imagemPost: './imagens/gato-telefone 1.png',
            iconeCurtida: './imagens/respondeai 1.png',
            usuarioCurtida: 'respondeai',
            numeroCurtidas: '101.523'
        },
        {
            id: '2',
            icone: './imagens/barked 1.png',
            usuario: 'barked',
            imagemPost: './imagens/dog 1.png',
            iconeCurtida: './imagens/9gag 1.png',
            usuarioCurtida: '9gag',
            numeroCurtidas: '99.159'
        },
        {
            id: '3',
            icone: './imagens/meowed 1.png',
            usuario: 'meowed',
            imagemPost: './imagens/gato-telefone 1.png',
            iconeCurtida: './imagens/respondeai 1.png',
            usuarioCurtida: 'respondeai',
            numeroCurtidas: '101.523'
        }

    ]

    return (
        <div class="caixa-posts">
            {listaPosts.map((l) =>
                <Post
                    icone={l.icone}
                    nomeUsuario={l.usuario}
                    imagem={l.imagemPost}
                    curtida={l.iconeCurtida}
                    usuarioCurtida={l.usuarioCurtida}
                    numeroCurtidas={l.numeroCurtidas}
                    id={l.id}
                />)}
        </div>
    )

}