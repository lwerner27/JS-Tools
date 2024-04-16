<script>
  import LoginMinConfig from "./LoginGoogleMinConfig.svelte";
  import { configuration } from "../../store.js";

  let addSettings = false;
  let configGroups = [
    "Authentication Window Settings",
    "Initial Password Settings",
  ];
  let addedConfigs = [];

  function addConfiguration() {
    addSettings = true;
  }

  // Handles the change of the selector for additional configurations
  function handleChange(value) {
    
    // Add the selection to the addedConfigs array
    addedConfigs = [...addedConfigs, value];

    // Remove the selection from the configGroups array
    configGroups.splice(configGroups.indexOf(value), 1);
    configGroups = configGroups;

    // repopulate the "Add Additional Settings button"
    addSettings = false;
  }

  let builtConfig;

  async function showPreview() {
    const response = await fetch("/api/generate-plist?configuration=" + JSON.stringify($configuration))
    builtConfig = await response.json()

    builtConfig = builtConfig.split("\n")

    document.getElementById("configuration_preview").showModal()
    
  }
</script>

<LoginMinConfig />

<!-- Addtitional Authentication Window Setttgs Beyond the Minimum Requirements -->
{#if addedConfigs.includes("Authentication Window Settings")}
  <!-- TODO: Create Component for Auth Window Settings Card -->
{/if}

{#if !addSettings}
  <button
    on:click={addConfiguration}
    class="mt-10 w-full btn btn-outline btn-info"
    >Add Additional Configuration</button
  >
{:else}
  <select
    class="mt-10 select select-info w-full"
    on:change={(e) => handleChange(e.target.value)}
  >
    <option disabled selected>Select Configuration to Add</option>

    {#each configGroups as configGroup}
      <option value={configGroup}>{configGroup}</option>
    {/each}
  </select>
{/if}

{#each addedConfigs as addedConfig}
  <div>{addedConfig}</div>
{/each}

<button class="btn btn-outline btn-accent btn-block mt-10" on:click={showPreview}
  >Preview Configuration</button
>

<dialog id="configuration_preview" class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
    <h3 class="font-bold text-lg">Configuration Preview</h3>
    <div class="mockup-code mt-5">

      {#if builtConfig}
      {#each builtConfig as line}
        <pre><code>{line}</code></pre>
      {/each}
      {/if}
    </div>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
<!-- <p>{JSON.stringify($configuration)}</p> -->
