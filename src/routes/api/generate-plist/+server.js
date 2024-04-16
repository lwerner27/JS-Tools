import { json } from "@sveltejs/kit"

import plist from "plist"

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {

    const configuration = JSON.parse(url.searchParams.get('configuration'))
     
    let builtConfig = plist.build(configuration)

    return json(builtConfig)
};