
const mainContactPage = () => {
  return /*html*/`
   <!-- contact section start -->
   <div class="bg-white lg:rounded-2xl dark:bg-[#111111]">
   <h2 class="after-effect after:left-60 after:top-[76px] mb-12 md:mb-[30px] pl-4 md:pl-[60px] pt-12">
       Liên Hệ </h2>
   <div
       class="mx-4 md:mx-[60px] p-4 md:p-16 dark:border-[#212425] dark:border-2 bg-color-810 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px]">
       <h3 class="text-4xl">
           <span class="text-gray-lite dark:text-[#A6A6A6]">Tôi luôn cởi mở để thảo luận về sản phẩm</span>
           <br />
           <span class="font-semibold dark:text-white">công việc thiết kế hoặc quan hệ đối tác.</span>
       </h3>

       <form action="" method="POST">
           <div class="returnmessage"
               data-success="Your message has been received, We will contact you soon."></div>
           <div class="empty_notice">
               <span>Vui lòng điền vào các trường bắt buộc</span>
           </div>

           <!-- name input  -->
           <div class="relative z-0 w-full mt-[40px] mb-8 group">
               <input type="text" id="name" name="name"
                   class="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
                   placeholder=" " required="" />
               <label for="name"
                   class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                   Name * </label>
           </div>

           <!-- email input  -->
           <div class="relative z-0 w-full mb-8 group">
               <input type="email" name="email"
                   class="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
                   placeholder=" " id="email" required="" />
               <label for="email"
                   class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                   Email * </label>
           </div>

           <!-- message input  -->
           <div class="relative z-0 w-full mb-8 group">
               <input type="text" name="message"
                   class="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
                   placeholder=" " id="message" required="" />
               <label for="message"
                   class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                   Message * </label>
           </div>

           <!-- submit buttons -->
           <input type="submit"
               class="px-6 py-2 rounded-lg border-[2px] mt-3 border-color-910 font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition-colors duration-300 ease-in-out hover:border-transparent dark:text-white"
               value="Submit" />
       </form>
   </div>~
    
  `
}

export default mainContactPage