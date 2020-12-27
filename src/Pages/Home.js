import React,{ useLayoutEffect, useState, useEffect } from 'react';
import Footer from '../PageComponents/Footer'
import Firebase from '../config/Firebase'

const Home = (props) => {
    
    let sections = [
                    (
                    <section id="banner">
                    <div class="inner">          
                    </div>
                    <ul class="actions" id="headerButtonsUL">
                            <li><a href="#services" className="button alt">Nos services</a></li>
                            <li><a href="#one" className="button alt">Contactez nous</a></li>
                        </ul> 
                </section>),
                (<section id="one">
                <div className="inner">
                    <header>
                        <h2>A propos</h2>
                    </header>
                    <p>Description des services offerts par nous. </p>
                    <ul className="actions">
                        <li><a href="#services" className="button alt">Learn More</a></li>
                    </ul>
                </div>
            </section>),
            ( <section id="services">
            <div className="inner">
                <article>
                    <div className="content">
                        <header>
                            <h3>Construction exterieur</h3>
                        </header>
                        <div className="image fit">
                            <img src="images/pic01.jpg" alt="" />
                        </div>
                        <p>Cela pourrait etre le premier example d'un type de construction!</p>
                    </div>
                </article>
                <article className="alt">
                    <div className="content">
                        <header>
                            <h3>Revetement interieur</h3>
                        </header>
                        <div className="image fit">
                            <img src="images/pic02.jpg" alt="" />
                        </div>
                        <p>Ceci est un deuxieme example de service offert par CJR!</p>
                    </div>
                </article>
            </div>
            </section>),
            <Footer/>
            // (  <section id="three">
            // <div class="inner">
            //     <article>
            //         <div class="content">
            //             <span class="icon fa-laptop"></span>
            //             <header>
            //                 <h3>Tempus Feugiat</h3>
            //             </header>
            //             <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna lorem ullamcorper laoreet, lectus arcu.</p>
            //             <ul class="actions">
            //                 <li><a href="#" class="button alt">Learn More</a></li>
            //             </ul>
            //         </div>
            //     </article>
            //     <article>
            //         <div class="content">
            //             <span class="icon fa-diamond"></span>
            //             <header>
            //                 <h3>Aliquam Nulla</h3>
            //             </header>
            //             <p>Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed.</p>
            //             <ul class="actions">
            //                 <li><a href="#" class="button alt">Learn More</a></li>
            //             </ul>
            //         </div>
            //     </article>
            //     <article>
            //     <div class="content">
            //             <span class="icon fa-laptop"></span>
            //             <header>
            //                 <h3>Sed Magna</h3>
            //             </header>
            //             <p>Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula.</p>
            //             <ul class="actions">
            //                 <li><a href="#" class="button alt">Learn More</a></li>
            //             </ul>
            //         </div>
            //     </article>
            // </div>
            // </section>)


    ]



    return sections
    
}

export default Home