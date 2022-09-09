<script>

import Service from "../lib/service.svelte"

let services = [
        {name: 'Branding', text: 'We design comprehensive Brand Guidelines to help you stay true to your Brand' + "'s " + 'Core Values.', accent: 'bg-orange', src: '/logorilla.png'},
        {name: 'Web Design', text: 'We Design Immersive Web Experiences to help guide your customers straight to you.', accent: 'bg-green', src: '/web.png'},
        {name: 'Social Media', text: 'We Create amazing content that generates engagement and boosts interactivity.', accent: 'bg-yellow', src: '/social.png'},
    ];

</script>

<!--About Section-->

<section class="border-dark border-b-2 px-5vw">

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