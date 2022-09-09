<section class="px-5vw">

    <div class="pt-20 pb-10">
        <h1 class="font-title font-extrabold text-2xl leading-normal mb-4">Let's work together!</h1>
        <p class="font-body text-lg leading-relaxed mb-4">We are eager to know About your Brand and how together we can make it even <span class="font-medium text-pink">MORE Amazing</span>. Feel free to get in touch anytime and we'll get back to you ASAP!.</p>
    </div>

    <form action="https://api.web3forms.com/submit" method="POST" class="flex flex-col gap-4 mb-20 font-medium">

        <input type="hidden" name="access_key" value="f9d73776-1c97-45e2-b544-ba11be9d241c">

        <div class="flex gap-4">
            <label for="name" class="flex flex-col w-full">Name
                <input type="text" name="name" required class="border-dark border-2 w-full p-2 text-gray-500 font-light mt-1">
            </label>
            <label for="email" class="flex flex-col w-full">Email
                <input type="email" name="email" required class="border-dark border-2 w-full p-2 text-gray-500 font-light mt-1">
            </label>
        </div>

        <div class="flex gap-4">
            <label for="business" class="flex flex-col w-full">Business Name
                <input type="text" name="business" required class="border-dark border-2 w-full p-2 text-gray-500 font-light mt-1">
            </label>
            <label for="subject" class="flex flex-col w-full">Subject                
                <select name="subject" id="sub" class="border-dark border-2 rounded-none grow p-2 text-gray-500 font-light mt-1">
                    <option value="" selected disabled hidden class="opacity-50">Select a service</option>
                    <option value="Branding">Branding Design</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Multiple">Multiple Services</option>
                </select>
            </label>
        </div>

        <label for="message" class="w-full">How can we help you?
            <textarea name="message" required class="border-dark border-2 w-full p-2 text-gray-500 font-light mt-1"></textarea>
        </label>

        <input type="hidden" name="redirect" value="https://web3forms.com/success">
         
        <button type="submit" class="bg-buzz font-title px-5 py-1 border-solid border-2 border-dark shadow-brutal hover:shadow-hovered transition-shadow">Submit Form</button>
    
    </form>

</section>  