import React from 'react';
import '../styles/home.css'

export default function Home() {
    return (
        <>
            <section id="hero">
                <div class="hero-first-column">
                    <h2 id="claim">
                        nature.<br />
                        design.<br />
                        life.
                    </h2>
                </div>
                <div class="hero-second-column">
                    <img src="/public/projects_highLights/hero-foto.jpg" alt="first_project" />
                </div>
            </section>

            <section id="philosophy">
                <div class="philosophy-first-column">
                    <img src="/public/projects_highLights/SvalrLuft7.jpg" alt="proyecto arquitectura 2" />
                </div>
                <div class="philosophy-second-column">
                    <h2>philosophy</h2>
                    <p>Morska's approach: Crafting design concepts from initial ideas and site character, resulting in high-quality, context-driven architecture. Ongoing exploration of spatial articulation and materialization.</p>
                </div>
            </section>

            <section id="philosophy2">
                <div class="philosophy2-first-column">
                    <p>A youthful Stockholm-based architecture firm promoting an open, interdisciplinary approach. We collaborate closely with design, arts, and innovative technology fields, fostering a collective dialogue center.</p>
                </div>
                <div class="philosophy2-second-column">
                    <img src="/public/projects_highLights/Havbris11.jpg" alt="proyecto arquitectura 1" />
                </div>
            </section>


            <section id="studio">
                <div class="studio-first-column">
                    <img src="/public/people/Team2.jpg" alt="team 2" />
                </div>
                <div class="studio-second-column">
                    <img src="/public/people/team3.jpg" alt="team 3" />
                </div>
                <div class="studio-third-column">
                    <img src="/public/people/Team1.jpg" alt="team 1" />
                </div>
                <div class="studio-fourth-column">

                    <h2>the_studio</h2>
                    <p>Our team is a multidisciplinary team of designers, architects, and artists, working together to create innovative and creative solutions.</p>
                </div>
            </section>


            <section id="contact">
                <div class="contact-first-column">
                    <h2>contact</h2>
                </div>
                <div class="contact-second-column">
                    <h3>Stockholm, Sverige</h3>
                    <p>
                        Rue du Nord-Bohème, 5 <br />
                        52045 Stockholm, Sverige <br />
                        kontakt@morska-nordisk.se <br />
                        +46 621 145 534
                    </p>
                </div>
                <div class="contact-third-column">
                    <h3>Stuttgart</h3>
                    <p>
                        Tulpenstrasse 31 <br />
                        70180 Stuttgart, Germany <br />
                        info@babelstudio.net <br />
                        +49(0)7116402823
                    </p>
                </div>
                <div class="contact-fourth-column">
                    <h3>Bilbao</h3>
                    <p>
                        Marzana 16, entreplanta izquierda <br />
                        48003 Bilbao, Spain <br />
                        info@babelstudio.net <br />
                        +34 657 321 231
                    </p>
                </div>
            </section>

        </>
    );
}