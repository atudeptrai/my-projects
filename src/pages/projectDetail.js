import footer from "../components/footer"
import header from "../components/header"
import projectListPage from "../components/projectList"

const projectDetailPage = () => {
  return /*html*/`
  ${header()}
  ${projectListPage()}
  ${footer()}
 
  `
}

export default projectDetailPage