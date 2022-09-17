import  Posts  from "./Posts";
import  Sidebar  from "./Sidebar";
import  Stories  from "./Stories";

export default function Corpo() {
    return (
        <div class="container">
            <div class="container-principal">
                <Stories />
                <Posts />
            </div>
            <Sidebar/>
        </div>
    )
}