<script>
import { each } from "svelte/internal";



    let projects = [
        {name: 'La Postreria 77', color: 'bg-pink'},
        {name: 'Enchiladas Inc.', color: 'bg-buzz'},
        {name: 'Doblerre', color: 'bg-green'},
        {name: 'LPainters', color: 'bg-orange'},
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

<section class="bg-dark border-dark border-b-2 px-5vw py-20">

    {#each projects as project, i (project.name)}
        {#if i == serviceIndex}
        <h1 class="text-light font-title">{project.name}</h1>
        <div class="{project.color} w-32 h-20 mb-6"></div>
        {/if}
    {/each}

    <button on:click={addServiceIndex} class="font-title bg-light p-2">Next Name</button>
    <button on:click={subServiceIndex} class="font-title bg-light p-2">Previous Name</button>
        
    


</section>