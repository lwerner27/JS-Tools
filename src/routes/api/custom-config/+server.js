import { json } from '@sveltejs/kit';
import { buildPlist } from '$lib/PlistBuilder';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	// Get variables from teh request
	const {
		profileName,
		profileUUID,
		payloadUUID,
		applicationIdentifier,
		customPlist,
	} = await request.json();

	// Build the mobileconfig profile
	let mobileconfigContent = buildPlist(
		profileUUID,
		payloadUUID,
		profileName,
		applicationIdentifier,
		customPlist
	);

	console.log(mobileconfigContent);

	return json({
		status: 201,
		mobileconfigContent,
	});
}
