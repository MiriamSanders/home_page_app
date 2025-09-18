function Post({ post }) {
    return (
        <article key={post.id} className="post-card">
            <div className="post-image-container">
                <img src={post.image} alt={post.title} className="post-image" />
                <span className="post-category">{post.category}</span>
            </div>

            <div className="post-content">
                <div className="post-meta">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                </div>

                <h3 className="post-title">{post.title}</h3>

                <p className="post-excerpt">{post.excerpt}</p>

                <div className="read-more">
                    Read More
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </article>
    )
}
export default Post;