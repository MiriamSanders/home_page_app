import { categories, blogPosts } from "../data";
import PopularPost from "./PopularPost";
function SideBar({ activeCategory, setActiveCategory }) {
    return (
        <>
            <aside className={`sidebar`}>
                <div className="sidebar-section">
                    <h3 className="sidebar-title">Categories</h3>
                    <div>
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`category-btn ${activeCategory === category ? 'category-btn-active' : ''}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="sidebar-section">
                    <h3 className="sidebar-title">About Me</h3>
                    <div className="profile-avatar">JD</div>
                    <p className="profile-text">
                        Hi, I'm Jane Doe! I'm passionate about technology, design, and sharing knowledge.
                        Welcome to my corner of the internet where I write about the things I love.
                    </p>
                </div>
                <div className="sidebar-section">
                    <h3 className="sidebar-title">Popular Posts</h3>
                    <div>
                        {blogPosts.slice(0, 3).map((post, index) => (
                            <PopularPost key={index} post={post} index={index} />
                        ))}
                    </div>
                </div>
            </aside>
        </>
    )
}
export default SideBar;