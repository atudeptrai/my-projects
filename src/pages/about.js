import footer from "../components/footer"
import header from "../components/header"
import mainAboutPage from "../components/mainAbout"

const aboutPage = () => {
  return `
 ${header()}
 ${mainAboutPage()}
 ${footer()}
  `
}

export default aboutPage