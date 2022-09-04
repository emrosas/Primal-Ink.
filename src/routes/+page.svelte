<script>

    import Service from "../lib/service.svelte"

    let services = [
        {name: 'Branding', text: 'We will build a complete Branding MASTERPIECE to garantee your brands success'},
        {name: 'Web Design', text: 'Cool Web Design text will go here'},
        {name: 'Social Media', text: 'Cool Social Media text will go here'},
    ];

</script>

<!--Hero Section-->

<section class="border-solid border-l-2 border-r-2 border-dark">
    
    <!--Hero Text and Button-->

    <div class="px-5vw pt-20 pb-10 border-solid border-b-2 border-dark">
        <h1 class="font-title font-extrabold text-3xl leading-normal mb-6">We help business owners build their brands</h1>
        <p class="font-body font-normal leading-loose mb-9">By designing a cohesive Branding Identity and web experiences that help them connect with their customers.</p>
        <button class="bg-buzz font-title px-5 py-1 border-solid border-2 border-dark shadow-brutal hover:shadow-hovered transition-shadow">Get in Touch!</button>
        <div class="w-full h-40 mt-20" style="background-image: radial-gradient(circle at 2px 2px, black 2px, transparent 0); background-size: 35px 35px;"></div>
    </div>
    
    <!--Hero Image-->

    <div class="bg-pink">
        <img src="/images/rosa.png" alt="Sección Rosa" class="w-full">
    </div>

</section>
    
<!--About Section-->

<section class="border-solid border-2 border-dark">

    <div class="px-5vw py-20">
        <h1 class="font-title font-extrabold text-3xl leading-normal mb-10">We are a multidisciplinary Design Studio</h1>
        <p class="font-body text-lg leading-relaxed mb-4">We specialize in the creation and optimization of <b class="text-pink font-medium">Brand Identities</b> and <b class="text-pink font-medium">User Experiences</b>.</p>
        <p class="font-body text-lg leading-loose">We aim to <b class="text-pink font-medium">Help Brands</b> tell creative stories and expand  through <b class="text-pink font-medium">Unique Design Solutions</b>.</p>
    </div>

    <div class="px-5vw flex flex-col gap-4">
    {#each services as service (service.name)}
        <Service service={service} />   
    {/each}
    </div>

</section>




    

