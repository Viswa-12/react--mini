// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {properties} = props
  const {title, description, publishedDate} = properties
  return (
    <li className="listItem">
      <div className="listItemtop">
        <h1 className="postCount">{title}</h1>
        <p className="publishedDate">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
