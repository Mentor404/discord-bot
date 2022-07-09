const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping8')
        .setDescription('Replies with Pong!'),

    async execute(interaction) {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('primary')
                .setLabel('Pong!')
                .setEmoji('949860353045565540')
                // Apenas o ID
                .setStyle('SECONDARY'),
                //https://discordjs.guide/interactions/buttons.html#deferring-and-updating-the-button-message
                )
        await interaction.reply({ content: 'Pong!', components: [row], ephemeral: true});
        await wait(2000);
        await interaction.editReply({content: 'Pong! Pong!', components: [], ephemeral: true});
    },
};

