import { useParams, useSearchParams } from "react-router-dom";
import Menu from "../../../menu";

const Produto = () => {
    const params = useParams();
    const id = params.id;

    const [qs] = useSearchParams();

    return (
        <div className="container">
            <Menu />

            <h1>Produto  parms {id}  qs {qs.get("page")} </h1>
        </div>
    );
}

export default Produto;