<script>
    export let classes;
    export let placeholder;
    export let label;
    export let name;
    export let handler;

    let element;

    function onInput() {
        handler(element)
    }
</script>

<label class="form-control w-full mb-5">
    <div class="label">
        <span class="label-text {classes}">{label}</span>
    </div>
    <input
        bind:this={element}
        type="text"
        placeholder={placeholder}
        class="input input-bordered w-full text-neutral-content"
        name={name}
        on:input={onInput}
    />
</label>