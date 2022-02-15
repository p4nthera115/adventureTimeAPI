import fetch from "node-fetch"

async function getResident(resident) {
    const result = await fetch(resident);
    return await result.json();
}

export default getResident;