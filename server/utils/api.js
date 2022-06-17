async function getBotGuilds() {
    const response = await fetch('http://discord.com/api/v6/users/@me/guilds', {
        method: 'GET',
        headers: {
            Authorization: `Bot ${TOKEN}`
        }
    });
}

async function getNetNutData() {
    const api_url = `https://reseller-api.netnut.io/api/aff/customers?loginEmail=cometproxies1@gmail.com&loginPassword=Proxiescom098!`
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    return json;
}

module.exports = { getNetNutData }