function PopularPost({post,index}) {
    return (
        <div className={`popular-post ${index === 2 ? 'popular-post-last' : ''}`}  >
            <img src={post.image} alt={post.title} className="popular-post-img" />
            <div>
                <div className="popular-post-title">{post.title}</div>
                <div className="popular-post-date">{post.date}</div>
            </div>
        </div>
    )
}
export default PopularPost;