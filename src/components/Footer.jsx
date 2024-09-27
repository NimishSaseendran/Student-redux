import React from 'react';

function Footer() {
    return (
        <>
            <footer className="text-white text-center mt-5" style={{backgroundColor:'#262626'}}>
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#3b5998" }}
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#55acee" }}
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>

                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#dd4b39" }}
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-google"></i>
                        </a>

                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#ac2bac" }}
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>

                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#0082ca" }}
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>

                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#333333" }}
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </section>
                </div>

                <div className="text-center p-3 bg-black">
                    © 2020 Copyright: Student Management System
                </div>
            </footer>
        </>
    );
}

export default Footer;
