// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blogListContainer">
      {blogsList.map(eachrow => (
        <BlogItem key={eachrow.id} properties={eachrow} />
      ))}
    </ul>
  )
}

export default BlogList
