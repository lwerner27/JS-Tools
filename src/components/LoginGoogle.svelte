<script>
  import CustomTextInput from "./CustomTextInput.svelte";
  import { configuration } from "../store.js";

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

  // Handles the changes to text inputs and updates the store with the new values.
  function updateConfig(element) {

    // Call the update method on the store
    configuration.update((configuration) => {

      // Spread the old confguration onto the new configuration
      let newConfiguration = {
        ...configuration,
      };

      // Add the new Key and value to the configuration
      newConfiguration[element.name] = element.value;

      return newConfiguration;
    });
  }
</script>

<div class="mt-10">
  <div class="card w-full bg-primary text-primary-content">
    <div class="card-body">
      <h2 class="card-title">Minimum Required Keys</h2>

      <CustomTextInput
        classes="text-accent-content"
        placeholder="1081771887720-2l9ug56be9pk8b1nv0geeljobt60u3a1.apps.googleusercontent.com"
        label="Client ID"
        name="OIDCClientID"
        handler={updateConfig}
      />

      <CustomTextInput
        classes="text-accent-content"
        placeholder="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"
        label="Client Secret"
        name="OIDCClientSecret"
        handler={updateConfig}
      />

      <CustomTextInput
        classes="text-accent-content"
        placeholder="https://127.0.0.1/jamfconnect"
        label="Redirect URI"
        name="OIDCRedirectURI"
        handler={updateConfig}
      />
    </div>
  </div>
</div>

<!-- Addtitional Authentication Window Setttgs Beyond the Minimum Requirements -->
{#if addedConfigs.includes("Authentication Window Settings")}
  <div class="mt-10">
    <div class="card w-full bg-primary text-primary-content">
      <div class="card-body">
        <h2 class="card-title">Authentication Window Settings</h2>

        <CustomTextInput
          classes="text-accent-content"
          placeholder="https://127.0.0.1/jamfconnect"
          label="Use Passthrough Authentication"
          name="OIDCUsePassthroughAuth"
          handler={updateConfig}
        />
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

<!-- Used for Checking Bindings -->
<!-- <div class="w-1/2 mx-auto mt-10">
    <h1>OIDCClientID: {OIDCClientID}</h1>
    <h1>OIDCClientSecret: {OIDCClientSecret}</h1>
    <h1>OIDCRedirectURI: {OIDCRedirectURI}</h1>
  </div> -->
