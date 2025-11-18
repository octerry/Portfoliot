// récupération des tokens
const fragment = new URLSearchParams(window.location.hash.slice(1));
const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];


// token pour requetes
let secretsUser = `${tokenType} ${accessToken}`


// récupération des infos de base de l'user (pseudo, pp etc...)
fetch('https://discord.com/api/users/@me', {
    headers: {
        authorization: `${secretsUser}`,
    },
})
.then(result => result.json())
.then(response => {
    const { username, discriminator, avatar, id} = response;

    //ICI ON PEUT INJECTER DES TRUCS DANS LE HTML EN MODE "getElementById"
    console.log(`bien connecté en temps que ${username}`)

})

// récupération de la liste des serveurs de l'user
fetch('https://discord.com/api/users/@me/guilds', {
    headers: {
        authorization: `${secretsUser}`,
    },
})
.then(result => result.json())
.then(responseGuilds => {
    // ICI ON PEUT UTILISER LES SERVEURS DES GENS
})
.catch(console.error)