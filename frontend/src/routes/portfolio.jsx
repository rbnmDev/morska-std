import { useEffect, useState, } from "react";
import { Outlet, NavLink, useLoaderData, Form, redirect, useNavigation, useSubmit, } from "react-router-dom";

import { loader } from "../controller.js";
import Nav from "../components/Nav";

export default function Portfolio() {

    const [page, setPage] = useState([]);

    const [data, setData] = useState([]);
    useEffect(() => {
        loader().then((data) => {
            setData(data);
        });
    }, []);

    return (
        <>
            <aside id="sidebar">
                <div>
                    <h2>projects</h2>
                </div>
                <div>
                    <ul>
                        {data.map((page) => (
                            <li key={page.id}>
                                <NavLink to={`/projects/${page.id}`}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    {page.title.rendered}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

            <section>
                <Outlet />
            </section>
        </>
    );
}


