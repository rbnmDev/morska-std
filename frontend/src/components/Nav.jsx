import React, { useState, useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";
import '../styles/nav.css';

const MIN_WIDTH_PX = 450; // Tamaño mínimo en píxeles
const ORIGINAL_SVG_WIDTH = 1860; // Ancho original del SVG

export default function Nav() {
    const [svgScale, setSvgScale] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Calcular el valor de escala en función del ancho mínimo en píxeles y el ancho original del SVG
            const scale = Math.max(MIN_WIDTH_PX / ORIGINAL_SVG_WIDTH, 1 - scrollY * 0.001);

            setSvgScale(scale);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <nav className="nav">
                <Link to="/">
                    <svg
                        id="logo_morska"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 2300 392.02"
                        style={{
                            transform: `scale(${svgScale})`,
                            transformOrigin: 'top left',
                            width: '100%', // Hacer que el ancho del SVG sea el 100% de la pantalla
                        }}
                    >
                        <g id="Capa_2" data-name="Capa 2">
                            <g id="Capa_1-2" data-name="Capa 1">
                                <path
                                    className="cls-1"
                                    d="M1703.94,157.31l32.64,115.05h-65.69Zm-42.67-87.44c20.08,0,36-15.48,36-34.73,0-19.66-15.9-35.14-36-35.14a35.18,35.18,0,0,0-35.56,35.14c0,19.25,15.9,34.73,35.56,34.73m93.3,0c20.08,0,36-15.48,36-34.73,0-19.66-15.9-35.14-36-35.14S1719,15.48,1719,35.14c0,19.25,15.48,34.73,35.56,34.73M1558.35,387h79.91l15.9-55.65h99.15l15.9,55.65H1860L1765,87.86H1654.16Zm-283.16,0h86.19V261.9L1447.56,387h99.16L1431.25,226.76l109.61-138.9h-89.53l-89.95,118.4V87.86h-86.19Zm-156.76,5c77,0,120.5-44.77,120.5-99.57,0-64.85-38.91-84.52-114.64-92.88-37.24-5-46.44-12.56-46.44-29.29,0-15.06,11.71-25.52,34.72-25.52,23.43,0,35.57,10.88,38.5,32.21h79.49c-5.44-63.17-46-93.3-118-93.3C1041,83.67,996.68,123,996.68,177c0,60.25,28.45,85.35,113,95.39,36,5.44,47.27,10.46,47.27,28.87,0,17.57-13.8,29.71-38.49,29.71-35.56,0-45.18-17.58-47.27-38.91H989.57c2.51,64.85,45.19,100,128.86,100M810.89,224.25v-72h28c27.61,0,42.67,9.62,42.67,33.89v1.67c0,24.27-14.22,36.4-43.09,36.4ZM725.54,387h85.35V279.89H831L891.63,387H982L910.46,263.16c31.38-12.13,54-36,54-78.66v-1.67c0-63.17-43.51-95-121.75-95H725.54Zm-196,5c96.65,0,159.82-62.76,159.82-154.8v-3.35c0-92.88-67.36-150.2-158.56-150.2C441.21,83.67,372.6,144.76,372.6,236v3.35C372.6,329.26,432.85,392,529.49,392m1.68-67.36c-41.42,0-69-31.38-69-85.77v-3.34c0-54.39,26.36-84.93,68.62-84.93s69,31.37,69,84.51v3.34c0,53.56-26.36,86.19-68.61,86.19M0,387H76.56V200.82L148.94,387h28.45l73.22-186.18V387H336V87.86H226.34L169,247.26,111.71,87.86H0Z"
                                />
                            </g>
                        </g>
                    </svg>
                </Link>
                <ul>
                    <li>
                        <NavLink to="/projects">projects</NavLink>
                    </li>
                </ul>
                <ul className="special-list">
                    <li>
                        <NavLink to="/home/#studio">the_studio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/#contact">contact</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}
