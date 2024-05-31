<script>
    import CustomTextInput from "../../components/CustomTextInput.svelte"
    let udid = ""; 
    let placeholder = `<plist>\n\t<key>SomeKey</key>\n\t<string>SomeValue</string>\n<plist>`
</script>


<div class="w-1/2 mx-auto mt-10">
    <div class="mt-10">
        <div class="card w-full bg-primary text-primary-content">
          <div class="card-body">
            <h2 class="card-title">Custom Config Information</h2>
            
            <CustomTextInput name="uuid-input" label="Profile UUID" placeholder="8400f9fc-eb14-481d-8dde-19e3d40bab0b" classes="text-accent-content" />
            <CustomTextInput name="app-id" label="Application Identifier" placeholder="com.developer.app" classes="text-accent-content" />

            <label class="form-control">
                <div class="label">
                  <span class="label-text text-accent-content">PLIST Data</span>
                </div>
                <textarea 
                    placeholder={placeholder.trim()}
                    class="textarea textarea-primary text-neutral-content"></textarea>
              </label>
            
          </div>
        </div>
      </div>
</div>