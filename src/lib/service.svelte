<script>

    export let service;

</script>


<div class="flex items-center gap-4 p-10 bg-white border-solid border-dark border-2">
    <div class="w-32 h-32 shrink-0 bg-dark"></div>
    <div>
        <h3 class="font-title text-xl pb2">{service.name}</h3>
        <p class="font-body text-lg">{service.text}</p>
    </div>
</div>