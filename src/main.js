import { render, router } from "./libs";
import aboutPage from "./pages/about";
import blogsPage from "./pages/blogs";
import contactPage from "./pages/contact";
import homePage from "./pages/homePage";
import NotFoundPage from "./pages/notfound";
import projectsPage from "./pages/project";
import projectDetailPage from "./pages/projectDetail";
import resumePage from "./pages/resume";

 document.querySelector("app");

router.on("/",()=>{
  render(homePage,app)
})
router.on("/abouts",()=>{
  render(aboutPage, app)
})
router.on("/resumes",()=>{
  render(resumePage,app)
})

router.on("/projects",()=>{
  render(projectsPage,app)
})
    router.on("/portfiloOne",()=>{
      render(projectDetailPage,app)
    })

router.on("/blogs",()=>{
  render(blogsPage, app)
})
router.on("/contacts",()=>{
  render(contactPage,app)
})
 router.notFound(()=>render(NotFoundPage,app))

 router.resolve();