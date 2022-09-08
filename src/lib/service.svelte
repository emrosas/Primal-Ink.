<script>

    export let service;

</script>

<div>
    <div class="flex items-center gap-5 py-5 px-5 bg-white border-solid border-dark border-2">
        <img src='{service.src}' alt="Service Illustration" class="h-20 w-20 shrink-0">
        <div>
            <h3 class="font-title text-lg pb2">{service.name}</h3>
            <p class="font-body font-light text-sm">{service.text}</p>
        </div>
    </div>
    <div class="{service.accent} h-2 border-2 border-dark border-t-0"></div>
</div>