import React from 'react';

const Navbar2 = () => {
    return (
        <>
            <nav className='main-nav'>
                {/* {1st Logo Part} */}

                <div className='logo'>
                    <h2>
                        <span>W</span>eapon
                        <span>S</span>hop
                    </h2>
                </div>

                {/* {2nd Menu Part} */}

                <div className='menu-link'>
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Service</a>
                        </li>
                        <li>
                            <a href='#'>Contact</a>
                        </li>
                    </ul>
                </div>

                {/* {3rd Social Media Links} */}
                <div className='social-media'>
                    <ul className='social-media-desktop'>

                        <li>
                            <a href='#' target="_blank">
                                <img src="https://picsum.photos/40/40"></img>
                            </a>
                        </li>

                        <li>
                            <a href='#' target="_blank">
                                <img src="https://picsum.photos/40/40"></img>
                            </a>
                        </li>

                        <li>
                            <a href='#' target="_blank">
                                <img src="https://picsum.photos/40/40"></img>
                            </a>
                        </li>

                    </ul>
                </div>

            </nav>

            {/* {hero section}
            <section className='her-section'>
                <p>Welcome to</p>
                <h1>Thapa Technical</h1>
            </section> */}

        </>


    );
};

export default Navbar2;