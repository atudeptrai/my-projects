import footer from "../components/footer"
import header from "../components/header"
import mainResumePage from "../components/mainResume"

const resumePage = () => {
  return `
    ${header()}
    ${mainResumePage()}
    ${footer()}


  `
}

export default resumePage