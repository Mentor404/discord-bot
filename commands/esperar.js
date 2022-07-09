const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping4')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {

        await interaction.deferReply({ephemeral: true});
        await wait(1000);

        await interaction.editReply({content: 'Pong!'});
    },
};
