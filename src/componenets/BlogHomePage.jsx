import React, { useState } from 'react';
import { blogPosts } from '../data';
import '../styles/BlogHomePage.css';
import Header from './Header';
import SideBar from './SideBar';
import Posts from './Posts';

export default function BlogHomepage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="blog-container">
      <Header />
      <div className={`main-container`}>
        <SideBar activeCategory={activeCategory} setActiveCategory={setActiveCategory}></SideBar>
        <main className="main-content">
          <div className="hero">
            <h1 className="hero-title">Welcome to My Blog</h1>
            <p className="hero-text">
              Discover insights on technology, design, travel, and lifestyle.
              Join me on this journey of learning and exploration.
            </p>
          </div>
          <Posts posts={filteredPosts} activeCategory={activeCategory}></Posts>
        </main>
      </div>
    </div>
  );
}