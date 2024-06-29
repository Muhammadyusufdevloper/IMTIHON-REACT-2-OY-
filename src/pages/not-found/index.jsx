import { Link } from "react-router-dom"
import noteFound from "../../assets/images/note-found/noteFound.webp"
import "./NoteFound.scss"
const NoteFound = () => {
    return (
        <>
            <section className="not-found">
                <div className="container ">
                    <div className="not-found__wrapper">
                        <div>
                            <img src={noteFound} alt="note found" />
                            <Link to={"/"}>Home</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NoteFound