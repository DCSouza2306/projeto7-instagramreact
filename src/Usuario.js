import React from 'react';

export default function Usuario() {
    const [usuario, setUsuario] = React.useState('Diego')
    const [foto, setFoto] = React.useState('./imagens/catanacomics 1.png')

    function alterarUsuario(){
        const novoUsuario = prompt('Digite o nome do novo usuario');
        setUsuario(novoUsuario);
    }

    function alterarFoto(){
        const novaFoto = prompt("Digite o link da nova foto de perfil");
        setFoto(novaFoto);
    }

    return (
        <div class="usuario">
            <img onClick={alterarFoto} src={foto} alt={`Icone do usuario ${usuario}`}/>
            <div class="nome-usuario">
                <p>catanacomics</p>
                <p>{usuario} <ion-icon onClick={alterarUsuario}name="pencil-outline"></ion-icon></p>
                
            </div>
        </div>
    )
}