<script>
    import CustomTextInput from "../CustomTextInput.svelte";
    import { configuration } from "../../store"

    function handleInput(event) {
        const element = event.target
        configuration.updateConfig($configuration, element)
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
          handler={handleInput}
        />
  
        <CustomTextInput
          classes="text-accent-content"
          placeholder="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"
          label="Client Secret"
          name="OIDCClientSecret"
          handler={handleInput}
        />
  
        <CustomTextInput
          classes="text-accent-content"
          placeholder="https://127.0.0.1/jamfconnect"
          label="Redirect URI"
          name="OIDCRedirectURI"
          handler={handleInput}
        />
      </div>
    </div>
  </div>