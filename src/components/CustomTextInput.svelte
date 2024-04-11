<script>
    export let classes;
    export let placeholder;
    export let label;
    export let inputText;
</script>
<label class="form-control w-full mb-5">
    <div class="label">
        <span class="label-text {classes}">{label}</span>
    </div>
    <input
        bind:value={inputText}
        type="text"
        placeholder={placeholder}
        class="input input-bordered w-full text-neutral-content"
    />
</label>