export default function Topo() {
    return (
        <div class="caixa-topo">
            <div class="caixa-topo-conteudo">
                <div class="caixa-logo-insta">
                    <ion-icon name="logo-instagram" class="logos-topo"></ion-icon>
                    <div class="barra"></div>
                    <img src="/imagens/logo.png" />
                </div>

                <input type="text" placeholder="Pesquisar"class="caixa-botao-pesquisar"/>
                

                <div class="caixa-icones">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}