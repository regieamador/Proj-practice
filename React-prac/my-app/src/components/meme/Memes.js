import MemesHeader from "./MemesHeader"
import memsData from "./memsData"
import MemesBody from "./MemesBody"

export default function Memes(){
    return (
        <div className="Memes bg-dark text-light">
            <MemesHeader />
            <MemesBody />
        </div>
    )
}