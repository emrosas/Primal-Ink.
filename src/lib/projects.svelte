<script>
import { each } from "svelte/internal";

    let tags = [
        {name: 'Branding', color: 'bg-pink'},
        {name: 'Web Design', color: 'bg-buzz'},
        {name: 'Social Media', color: 'bg-orange'},
    ]

    console.log(tags.name)

    let projects = [
        {name: 'La Postreria 77', color: 'bg-pink', description: 'Here goes a cool description of how we helped La Postreria 77.', tags: ['Web Design', 'Social Media']},
        {name: 'Enchiladas Inc.', color: 'bg-buzz', description: 'Here goes a cool description of how we helped Enchiladas Inc.', tags: ['Web Design', 'Social Media']},
        {name: 'Doblerre', color: 'bg-green', description: 'Here goes a cool description of how we helped Doblerre.', tags: ['Branding', 'Social Media']},
        {name: 'Tacos Rasta', color: 'bg-yellow', description: 'Here goes a cool description of how we helped Tacos Rasta.', tags: ['Branding', 'Social Media']},
        {name: 'LPainters', color: 'bg-orange', description: 'Here goes a cool description of how we helped LPainters.', tags: ['Branding', 'Web Design']},
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
            <div class="{project.color} w-full h-[50vh]"></div>
            <div class="flex">
                <div class="text-light p-6 w-3/4">
                    <h3 class="font-title text-lg mb-1">{project.name}</h3>

                    <div class="flex">
                        {#each tags as tag}
                            {#if project.tags.includes(tag.name)}
                                <div class="{tag.color} px-4 py-2 border-dark border-2 font-title shrink">{tag.name}</div>
                            {/if}
                        {/each}
                    </div>


                    <p class="font-body text-sm mb-8">{project.description}</p>
                    <a href="{project.url}" class="font-title bg-light text-dark border-dark border-2 px-2 shadow-brutal hover:bg-buzz transition-colors">Visit Profile</a>
                </div>
                <div class="bg-light flex w-1/4">
                    <button on:click={subServiceIndex} class="p-2 font-title bg-white border-dark border-2 shadow-brutal hover:shadow-hovered transition-shadow">Previous Project </button>
                    <button on:click={addServiceIndex} class="p-2 font-title bg-white border-dark border-2 shadow-brutal hover:shadow-hovered transition-shadow">Next Project</button>
                </div>
            </div>
        </div>
        {/if}
    {/each}
    
    
   
        
    


</section>