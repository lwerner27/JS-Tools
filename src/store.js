import { writable } from "svelte/store";


function createConfiguration() {
    const { subscribe, set } = writable({})

    return {
        subscribe,
        updateConfig: (configuration, element) => {
            let newConfig = {
                ...configuration
            }
    
            newConfig[element.name] = element.value
    
            return set(newConfig)
        }
    }
}

export const configuration = createConfiguration()