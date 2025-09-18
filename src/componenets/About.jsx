import React from 'react';
import '../styles/About.css';

function About() {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-text">
                    <h2 className="about-title">About This Blog</h2>
                    <p className="about-description">
                        Welcome to my blog! Here I share insights, tutorials, and ideas
                        on a variety of topics. My goal is to inspire and connect with
                        readers while offering valuable content in a warm, approachable style.
                    </p>
                </div>
                <div className="about-image">
                    <img
                        src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="About me"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
