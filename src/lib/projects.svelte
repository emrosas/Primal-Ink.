<script>
import { each } from "svelte/internal";

    let tags = [
        {name: 'Branding', color: 'bg-pink'},
        {name: 'Web Design', color: 'bg-buzz'},
        {name: 'Social Media', color: 'bg-orange'},
    ]

    console.log(tags.name)

    let projects = [
        {
        name: 'La Postreria 77',
        img: '/doblerre_project.png',
        tags: ['Web Design', 'Social Media'],
        description: 'Here goes a cool description of what we do with Branding and how we can help our clients upgrade their Brand by using our diferent services.',
        url: 'https://lapostreria77.com', 
        },
        {
        name: 'Enchiladas Inc.',
        img: '/rosa.png',
        tags: ['Web Design', 'Social Media'],
        description: 'Here goes a cool description of what we do with User Experience Design and how we can help our clients upgrade their Brand by using our diferent services.'
        },
        {
        name: 'Doblerre',
        img: '/doblerre_project.png',
        tags: ['Branding', 'Social Media'],
        description: 'Here goes a cool description of what we do with Social Media and how we can help our clients upgrade their Brand by using our diferent services.',
        },
        {
        name: 'Tacos Rasta',
        img: '/rosa.png',
        tags: ['Branding', 'Social Media'],
        description: 'Here goes a cool description of how we helped Tacos Rasta.',
        },
    ];

    let serviceIndex = 0

    function addServiceIndex() {
        if (serviceIndex < projects.length - 1) {
            serviceIndex ++
        } else {
            serviceIndex = 0
        }
    };

    function subServiceIndex() {
        if (serviceIndex > 0) {
            serviceIndex -- 
        } else {
            serviceIndex = projects.length - 1}
    };

</script>

<section class="bg-dark border-dark border-b-2">

    {#each projects as project, i (project.name)}
        {#if i == serviceIndex}
        <div>
            <img src="{project.img}" alt="Project Mockup" class="w-full h-[50vh] object-cover">
            <div class="flex">
                <div class="text-light p-6 w-3/4 flex flex-col items-start justify-between">
                    <div>
                        <h3 class="font-title text-xl mb-2">{project.name}</h3>

                        <div class="flex mb-3">
                            {#each tags as tag}
                                {#if project.tags.includes(tag.name)}
                                    <div class="{tag.color} px-3 py-1 border-dark border-2 font-title shrink text-xs">{tag.name}</div>
                                {/if}
                            {/each}
                        </div>
                        <p class="font-body font-light leading-relaxed text-mg mb-6">{project.description}</p>
                    </div>
                    
                    <a href="{project.url}" target=”_blank” class="font-title text-sm bg-light text-dark border-dark border-2 px-3 py-1 shadow-brutal hover:bg-buzz transition-colors">Visit Project</a>
                </div>

                <!--Buttons-->

                <div class="bg-light border-dark border-t-2 border-r-2 flex flex-col items-center justify-center gap-6 w-1/4 p-10">

                    <div class="flex flex-col items-center gap-2">
                        <button on:click={subServiceIndex} class="p-4 w-14 h-14 bg-white border-dark border-2 rounded-full shadow-brutal hover:shadow-hovered transition-shadow">
                            <img src="/arrow.svg" alt="left arrow" class="w-3/4">
                        </button>
                        <span class="font-title text-xs text-center">Previous Project</span>
                    </div>

                    <div class="flex flex-col items-center gap-2">
                        <button on:click={addServiceIndex} class="p-4 w-14 h-14 flex items-center justify-center bg-white border-dark border-2 rounded-full shadow-brutal hover:shadow-hovered transition-shadow">
                            <img src="/arrow.svg" alt="left arrow" class="w-3/4 rotate-180">
                        </button>
                        <span class="font-title text-xs text-center">Next Project</span>
                    </div>
                </div>

            </div>

        </div>
        {/if}
    {/each}
    
    
   
        
    


</section>