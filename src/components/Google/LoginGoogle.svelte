<script>
  import LoginMinConfig from "./LoginGoogleMinConfig.svelte"
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

</script>



<LoginMinConfig />



<!-- Addtitional Authentication Window Setttgs Beyond the Minimum Requirements -->
{#if addedConfigs.includes("Authentication Window Settings")}
  <div class="mt-10">
    <div class="card w-full bg-primary text-primary-content">
      <div class="card-body">
        <h2 class="card-title">Authentication Window Settings</h2>

        
      </div>
    </div>
  </div>
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

<p>{JSON.stringify($configuration)}</p>
