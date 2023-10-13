import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import PROYECT_URL from "../urlConfig.js";
import { loader } from "../controller.js";


export default function Project() {

    const [data, setData] = useState([]);
    const { projectId } = useParams();

    useEffect(() => {
        console.log("Estamos en PROJECT")
        loader().then((data) => {
            console.log("Estamos en PROJECT.DATA", data)
            const filteredData = data.filter((page) => page.id == projectId)
            console.log("filteredData", filteredData)
            console.log("Project ID", projectId)
            setData(filteredData);
        });
    }, [projectId]);

    return (
        <div>
            {data.map((page) => (
                <div key={page.id}>
                    {/*<h2>{page.title.rendered}</h2>*/}
                    <div id="project" dangerouslySetInnerHTML={{ __html: page.content.rendered }}>
                    </div>

                </div>
            ))}
        </div>
    )
}


