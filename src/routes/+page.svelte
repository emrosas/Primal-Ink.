<script>

    import Service from "../lib/service.svelte"

    let services = [
        {name: 'Branding', text: 'We design comprehensive Brand Guidelines to help you stay true to your Brand' + "'s " + 'Core Values.', accent: 'bg-orange', src: '/logorilla.png'},
        {name: 'Web Design', text: 'We Design Immersive Web Experiences to help guide your customers straight to you.', accent: 'bg-green', src: '/web.png'},
        {name: 'Social Media', text: 'We Create amazing content that generates engagement and boosts interactivity.', accent: 'bg-yellow', src: '/social.png'},
    ];

</script>

<!--Hero Section-->

<section class="border-solid border-l-2 border-r-2 border-dark">
    
    <!--Hero Text and Button-->

    <div class="px-5vw pt-32 pb-5 border-solid border-b-2 border-dark">
        <h1 class="font-title font-extrabold text-2xl leading-normal mb-4">We help business owners build their brands</h1>
        <p class="font-body text-lg leading-relaxed mb-9">By designing a cohesive Branding Identity and web experiences that help them connect with their customers.</p>
        <button class="bg-buzz font-title px-5 py-1 border-solid border-2 border-dark shadow-brutal hover:shadow-hovered transition-shadow">Get in Touch!</button>
        <div class="w-full h-40 mt-16" style="background-image: radial-gradient(circle at 2px 2px, black 2px, transparent 0); background-size: 28px 28px;"></div>
    </div>
    
    <!--Hero Image-->

    <div class="bg-pink flex items-center justify-center">
        <img src="/rosa.png" alt="Pink Section" class="w-full">
        <img src="/primalike.png" alt="Primalike" class="absolute w-[70%]">
    </div>

</section>
    
<!--About Section-->

<section class="border-solid border-2 border-dark px-5vw">

    <div class="py-20">
        <h1 class="font-title font-extrabold text-2xl leading-normal mb-8">We are a multidisciplinary Design Studio</h1>
        <p class="font-body text-lg leading-relaxed mb-4">We specialize in the creation and optimization of <span class="text-pink font-medium">Brand Identities</span> and <span class="text-pink font-medium">User Experiences</span>.</p>
        <p class="font-body text-lg leading-relaxed">We aim to <span class="text-pink font-medium">Help Brands</span> tell creative stories and expand  through <span class="text-pink font-medium">Unique Design Solutions</span>.</p>
    </div>

    <div class="flex flex-col gap-4 pb-20">
    {#each services as service (service.name)}
        <Service service={service} />   
    {/each}
    </div>

</section>




    

