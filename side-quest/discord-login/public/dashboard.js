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
    
    let n = 0;
    let max = responseGuilds.length;
    var passTrough = false;

    console.log(max)
    console.log(responseGuilds)

    while ((n < max) && !(passTrough)) {
        if (responseGuilds[n]['id'] == "751162838097330216") {
            passTrough = true
        }
        n++;
    };
    
    if (passTrough) {
        acceptedBody = document.getElementById('acceptedHomeBody');
        acceptedBody.style.display = "flex";
        
        deniedBody = document.getElementById('deniedHomeBody');
        deniedBody.style.display = "none";
    }

    console.log('vérification terminé !')
})
.catch(console.error)