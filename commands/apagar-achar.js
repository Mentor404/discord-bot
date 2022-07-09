const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping7')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        await interaction.reply('Pong!');
        const message = await interaction.fetchReply();
        //fetchReply Encontra a resposta do bot
        console.log(message);
        await interaction.deleteReply();
    //    não apaga com ephemeral: true
    },
};

