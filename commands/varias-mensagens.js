const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping5')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        await interaction.reply({content: 'Pong!', ephemeral: true});
        await interaction.followUp({content: 'Pong again! [text](http://site.com) \n<a:420weed:949860353045565540>', ephemeral: false});
    },
};

