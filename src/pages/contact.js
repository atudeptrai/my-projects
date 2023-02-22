import footer from "../components/footer"
import header from "../components/header"
import mainContactPage from "../components/mainContact"

const contactPage = () => {
  return /*html*/ `
  ${header()}
  ${mainContactPage()}
  ${footer()}
  `
}

export default contactPage