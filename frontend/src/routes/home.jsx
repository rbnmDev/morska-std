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
                <h2>philosophy</h2>
            </section>

            <section id="studio">
                <h2>the_studio</h2>
            </section>

            <section id="contact">
                <h2>contact</h2>
            </section>
        </>
    );
}