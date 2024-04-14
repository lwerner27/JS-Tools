<script>
    import Login from "../../components/Google/LoginGoogle.svelte";
    let idp;
    let app;
</script>

<div class="w-1/2 mx-auto mt-10">

    <select class="select select-info w-full" bind:value={idp}>
        <option disabled selected>Select Your IDP</option>
        <option>Google</option>
        <option>Azure</option>
    </select>

    {#if idp === "Google"}
        <div class="mt-10">
            <select class="select select-info w-full" bind:value={app}>
                <option disabled selected
                    >Select the Application to Configure</option
                >
                <option>Jamf Connect Login</option>
                <option>Jamf Connect Menubar</option>
            </select>
        </div>
    {/if}

    {#if app === "Jamf Connect Login"}
        <Login />
    {/if}

</div>
