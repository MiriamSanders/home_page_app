import React from 'react';
import '../styles/ContactPage.css';
import { blogPosts } from '../data';
import PopularPost from './PopularPost';

function ContactPage() {
    return (
        <div className="contact-page">
            {/* Hero Section */}
            <header className="contact-hero">
                <div className="contact-hero-content">
                    <h1>Contact Me</h1>
                    <p>Have questions or want to collaborate? Fill out the form below and I’ll get back to you soon.</p>
                </div>
            </header>

            {/* Main Content */}
            <div className="contact-main-container">
                {/* Contact Form */}
                <div className="contact-form-container">
                    <h2>Get in Touch</h2>
                    <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Message sent!') }}>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>

                {/* Sidebar */}
                <aside className="contact-sidebar">
                    <div className="profile-avatar">JD</div>
                    <p className="profile-text"> Hi, I'm Jane Doe! I'm passionate about technology, design, and sharing knowledge.
                        Welcome to my corner of the internet where I write about the things I love. Reach out anytime!</p>

                    <div className="sidebar-section">
                        <h3 className="sidebar-title">Popular Posts</h3>
                        {blogPosts.slice(0, 3).map((post, index) => (
                            <PopularPost key={index} post={post} index={index} />
                        ))}
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default ContactPage;
