
const navbar=()=>{
    
    return /*html*/ `
    
        <header
        class="lg:w-[560px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
        <nav class="hidden lg:block">
            <ul class="flex">
                <li> <a class="menu-item" href="abouts">
                        <span class="text-xl mb-1">
                            <i class="fa-regular fa-user"></i>
                        </span> ABOUT </a></li>
                <li> <a class="menu-item" href="resumes">
                        <span class="text-xl mb-1">
                            <i class="fa-regular fa-file-lines"></i>
                        </span> RESUMES </a></li>
                <li> <a class="menu-item" href="projects">
                        <span class="text-xl mb-1">
                            <i class="fas fa-briefcase"></i>
                        </span> PROJECTS </a></li>
                <li><a class="menu-item" href="blogs">
                        <span class="text-xl mb-1">
                            <i class="fa-brands fa-blogger"></i>
                        </span> BLOGS </a></li>
                <li> <a class="menu-item" href="contacts">
                        <span class="text-xl mb-1">
                            <i class="fa-solid fa-address-book"></i>
                        </span> CONTACT </a></li>
            </ul>
        </nav>
    </header> 
        `
   
        
    
}

export default navbar