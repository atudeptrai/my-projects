import footer from "../components/footer"
import header from "../components/header"
import mainProjectPage from "../components/mainProject"

const projectsPage = () => {
  return    `
    ${header()}
    ${mainProjectPage()}
    ${footer()}
  `
}

export default projectsPage