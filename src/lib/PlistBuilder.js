import plist from 'plist';

export const buildPlist = (
	profileUUID,
	payloadUUID,
	profileDisplayName,
	bundleIdentifier,
	customPlist
) => {
	let configurationProfile = {
		PayloadDisplayName: profileDisplayName,
		PayloadDescription: `Custom settings for ${bundleIdentifier}.`,
		PayloadType: 'Configuration',
		PayloadIdentifier: profileUUID,
		PayloadUUID: profileUUID,
		PayloadVersion: 1,
		PayloadContent: [
			{
				PayloadDisplayName: 'Custom Settings',
				PayloadDescription: `Custom settings for ${AppID}`,
				PayloadIdentifier:
					payloadIdentifier + '.com.apple.ManagedClient.preferences',
				PayloadUUID: payloadUUID,
				PayloadType: 'com.apple.ManagedClient.preferences',
				PayloadVersion: 1,
				PayloadContent: {
					[bundleIdentifier]: {
						Forced: [
							{
								mcx_preference_settings: {
									...customPlist,
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
