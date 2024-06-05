import plist from 'plist';

export const buildPlist = (
	profileUUID,
	payloadUUID,
	profileDisplayName,
	bundleIdentifier,
	customPlist
) => {
	let customPlistJSON = plist.parse(customPlist);

	let configurationProfile = {
		PayloadDisplayName: profileDisplayName,
		PayloadDescription: `Custom settings for ${bundleIdentifier}`,
		PayloadType: 'Configuration',
		PayloadIdentifier: profileUUID,
		PayloadUUID: profileUUID,
		PayloadVersion: 1,
		PayloadContent: [
			{
				PayloadDisplayName: 'Custom Settings',
				PayloadDescription: `Custom settings for ${bundleIdentifier}`,
				PayloadIdentifier:
					payloadUUID + '.com.apple.ManagedClient.preferences',
				PayloadUUID: payloadUUID,
				PayloadType: 'com.apple.ManagedClient.preferences',
				PayloadVersion: 1,
				PayloadContent: {
					[bundleIdentifier]: {
						Forced: [
							{
								mcx_preference_settings: {
									...customPlistJSON,
								},
							},
						],
					},
				},
			},
		],
	};

	return plist.build(configurationProfile);
};
