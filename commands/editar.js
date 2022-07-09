const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping3')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        await interaction.reply({content: 'Pong!'});
        await wait(1000);
        await interaction.editReply({content: 'Pong! Pong!'});
    },
};
