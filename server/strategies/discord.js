const passport = require('passport');
const DiscordStrategy = require('passport-discord');
const User = require('../database/schemas/User');
const SidGenerator = require('../utils/genSid');

passport.serializeUser((user, done) => {
    console.log("Serializing User...");
    done(null, user.discordId);
});

passport.deserializeUser( async (discordId, done) => {
    try {
        console.log("Deserializing User...");
        const user = await User.findOne({discordId});
        //console.log(user)
        if (!user) throw new Error('User not found')
        done(null, user)
    } catch (err) {
        console.log(err);
        done(err, null);
    }
    // try {
    //     const user = await User.findOne({id});
    //     console.log("TEST!@@##!@#$@#");
    //     return user ? done(null, user): done(null, null);
    // } catch (err) {
    //     console.log(err);
    //     done(err, null);
    // }
})
passport.use(
    new DiscordStrategy({
    clientID: process.env.DISCORD_OAUTH_CLIENT_ID,
    clientSecret: process.env.DISCORD_OAUTH_SECRET,
    callbackURL: process.env.DASHBOARD_CALLBACK_URL,
    scope: ['identify', 'guilds', 'email'],
    }, async (accessToken, refreshToken, profile, done ) => {
        const { id, username, discriminator, avatar, guilds, email } = profile;
        //console.log( id, username, discriminator, avatar, guilds );
        try {
            const findUser = await User.findOneAndUpdate(
                {discordId: id },
                {
                    discordTag: `${username}#${discriminator}`,
                    avatar,
                    guilds,
                    email,
                },
                {new: true}
            );
            if (findUser) {
                console.log("User was found");
                return done(null, findUser);
            } else {
                console.log("Test!");
                var generatedSid = SidGenerator.genSID();
                var generatedPass = SidGenerator.genPass();
                var generatedUser = SidGenerator.genPass();
                var UniqueSid = false;
                while (UniqueSid === false) {
                    const findSid = await User.findOne({ sid: `${generatedSid}` })
                    if (!findSid) {
                        UniqueSid = true;
                    }
                    else {
                        generatedSid = SidGenerator.genSID();
                    }
                }
                const newUser = await User.create( {
                    discordId: id,
                    discordTag: `${username}#${discriminator}`,
                    email, 
                    avatar,
                    sid: `${generatedSid}`,
                    proxyUser: `${generatedUser}`,
                    proxyPass: `${generatedPass}`,
                    guilds,
                    currentIps: {},
                } );
                return done(null, newUser);
            }
        } catch (e) {
            console.log(e);
            return done( e, null );
        }
    })
);