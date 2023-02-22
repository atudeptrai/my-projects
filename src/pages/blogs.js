import footer from "../components/footer"
import header from "../components/header"
import mainBlogPage from "../components/mainBlog"

const blogsPage = () => {
  return `
  ${header()}
  ${mainBlogPage()}
  ${footer()}
    
  `
}

export default blogsPage