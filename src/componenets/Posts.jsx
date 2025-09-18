import Post from './Post'
function  Posts({ posts, activeCategory }) {
    return (<>
        <div className="posts-header">
            <h2 className="posts-title">
                {activeCategory === 'All' ? 'Latest Posts' : `${activeCategory} Posts`}
            </h2>
            <span className="posts-count">
                {posts.length} {posts.length === 1 ? 'post' : 'posts'}
            </span>
        </div>

        <div className="posts-grid">
            {posts.map((post,index) => (
                <Post key={index} post={post}></Post>
            ))}
        </div></>)
}
export default Posts;