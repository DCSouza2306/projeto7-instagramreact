import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function Sidebar() {
    return (
        <div class="sidebar">
            <Usuario />
            <div class="sugestoes">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>
            <Sugestoes />
        </div>
    )
}