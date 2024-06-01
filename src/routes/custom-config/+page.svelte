<script>
	import { UUIDGenerator } from '$lib/UUIDGenerator.js';

	let profileName;
	let profileUUID;
	let applicationIdentifier;
	let payloadUUID = UUIDGenerator();
	let customPlist;

	// Generates a UUID for the top-level of the profile
	function GenerateUUID() {
		profileUUID = UUIDGenerator();
	}

	// Checks that all required values are provided and if so sends the request to build the config profile.
	function buildConfig() {
		if (
			!profileName ||
			!profileUUID ||
			!payloadUUID ||
			!applicationIdentifier ||
			!customPlist
		) {
			alert(
				'Your Config is invaild. Please enter all required information.'
			);
		} else {
			alert('You provieded a valid config.');
		}
	}
</script>

<div class="w-1/2 mx-auto mt-10">
	<div class="mt-10">
		<div class="card w-full bg-primary text-primary-content">
			<div class="card-body">
				<h2 class="card-title">Custom Config Information</h2>

				<label class="form-control w-full">
					<div class="label">
						<span class="label-text text-accent-content"
							>Profile Name</span
						>
					</div>
					<input
						type="text"
						class="input input-bordered w-full text-neutral-content"
						name="profileName"
						bind:value={profileName}
					/>
				</label>

				<label class="form-control w-full">
					<div class="label">
						<span class="label-text text-accent-content"
							>Profile UUID</span
						>
					</div>
					<div class="flex flex-row">
						<input
							type="text"
							placeholder="8400f9fc-eb14-481d-8dde-19e3d40bab0b"
							class="input input-bordered w-full text-neutral-content"
							name="profileUUID"
							bind:value={profileUUID}
						/>
						<button
							on:click={GenerateUUID}
							class="btn ml-2 btn-accent"
						>
							Generate
						</button>
					</div>
				</label>

				<label class="form-control w-full">
					<div class="label">
						<span class="label-text text-accent-content"
							>Application Identifier</span
						>
					</div>
					<input
						type="text"
						placeholder="com.developer.app"
						class="input input-bordered w-full text-neutral-content"
						name="applicationIdentifier"
						bind:value={applicationIdentifier}
					/>
				</label>

				<label class="form-control">
					<div class="label">
						<span class="label-text text-accent-content"
							>PLIST Data</span
						>
					</div>
					<textarea
						placeholder="Paste the contents of your PLIST here."
						class="textarea textarea-primary text-neutral-content h-60"
						bind:value={customPlist}
					></textarea>
				</label>

				<button class="btn btn-accent" on:click={buildConfig}>
					Submit
				</button>
			</div>
		</div>
	</div>
</div>
