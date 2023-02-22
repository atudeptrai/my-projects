
const mainProjectPage = () => {
  return /*html*/ `
  <section id="portfolio" class="bg-white   lg:rounded-2xl dark:bg-[#111111]">
  <div class="container  mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
      <div class="py-12 ">
          <h2 class="after-effect after:left-48 lg:mt-0">Dự Án</h2>
          <ul
              class="button-group isotop-menu-wrapper mt-[30px] flex w-full justify-start md:justify-end flex-wrap font-medium">
              <li class="fillter-btn mr-4 md:mx-4 is-checked" data-filter="*">All</li>
              <li class="fillter-btn mr-4 md:mx-4" data-filter=".dev">Video</li>
              <li class="fillter-btn mr-4 md:mx-4" data-filter=".plugin"> Web Design</li>
              <li class="fillter-btn mr-4 md:mx-4" data-filter=".branding"> Logo</li>
              <li class="fillter-btn mr-4 md:mx-4" data-filter=".custom">Graphic Design</li>
          </ul>
      </div>

      <div id="isotop-gallery-wrapper" class="mymix portfolio_list-two  two-col ">
          <div class="grid-sizer"></div>
          <!-- portfolio items one start -->
          <div class="portfolio_list-two-items isotop-item plugin custom ">
              <div
                  class="rounded-lg bg-[#fff0f0] p-6 dark:bg-transparent dark:border-[2px] border-[#212425]">
                  <div class="overflow-hidden rounded-lg">
                      <a href="portfiloOne" rel="modal:open">
                          <img class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                              src="images/work_images/small/1.jpg" alt="portfolio image" />
                      </a>
                  </div>
                  <span
                      class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">2022</span>
                  <h2
                      class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                      <a href="portfiloOne" rel="modal:open"> Dự Án 1 </a>
                  </h2>
              </div>
          </div>

          <!-- modal start for item one  -->
       

          <!-- portfolio items two start -->
          <div class="portfolio_list-two-items isotop-item dev branding ">
              <div
                  class="rounded-lg bg-[#fff3fc] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]">
                  <div class="overflow-hidden rounded-lg">
                      <a href="#portfiloTwo" rel="modal:open">
                          <img class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                              src="images/work_images/small/2.jpg" alt="portfolio image" />
                      </a>
                  </div>
                  <span
                      class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Logo</span>
                  <h2
                      class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                      <a href="#portfiloTwo" rel="modal:open">Dự án mẫu</a>
                  </h2>
              </div>
          </div>

          

          <!-- portfolio items three start -->
          <div class="portfolio_list-two-items isotop-item plugin ">
              <div
                  class="rounded-lg bg-[#fff3fc] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]">
                  <div class="overflow-hidden rounded-lg">
                      <a href="#portfiloThree" rel="modal:open">
                          <img class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                              src="images/work_images/small/3.jpg" alt="portfolio image" />
                      </a>
                  </div>
                  <span
                      class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">2021</span>
                  <h2
                      class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                      <a href="#portfiloThree" rel="modal:open">
                          Dự án tốt nghiệp
                      </a>
                  </h2>
              </div>
          </div>

          <!-- modal start for item three start -->
         
          <!-- modal start for item five start -->
          <div class="portfolio_list-two-items isotop-item branding ">
              <div
                  class="rounded-lg bg-[#fffae9] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]">
                  <div class="overflow-hidden rounded-lg">
                      <a href="#portfiloFive" rel="modal:open">
                          <img class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                              src="images/work_images/small/5.jpg" alt="portfolio image" />
                      </a>
                  </div>
                  <span
                      class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Web
                      Design</span>
                  <h2
                      class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                      <a href="#portfiloFive" rel="modal:open"> Web Design</a>
                  </h2>
              </div>
          </div>

   
          <!-- portfolio items Six start -->
          <div class="portfolio_list-two-items isotop-item branding ">
              <div
                  class="rounded-lg bg-[#f4f4ff] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]">
                  <div class="overflow-hidden rounded-lg">
                      <a href="#portfiloSix" rel="modal:open">
                          <img class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                              src="images/work_images/small/6.jpg" alt="portfolio image" />
                      </a>
                  </div>
                  <span
                      class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Video</span>
                  <h2
                      class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                      <a href="#portfiloSix" rel="modal:open">
                          HTML5 & CSS3
                      </a>
                  </h2>
              </div>
          </div>

          <!-- modal start for item six start -->
          

         
    

  <footer class="overflow-hidden rounded-b-2xl bg-[#f8fbfb] dark:bg-[#212425]">
      <p class="text-center py-6 text-gray-lite dark:text-color-910"> © 2022 All Rights Reserved by <a
              class="hover:text-[#FA5252] duration-300 transition"
              href="" target="_blank"
              rel="noopener noreferrer">Nguyễn Anh Tú</a>.
      </p>
  </footer>
</section>
  `
}

export default mainProjectPage