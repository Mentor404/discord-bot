const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping10')
        .setDescription('Replies with Pong!'),

    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('primary')
                    .setLabel('Click!')
                    .setEmoji('949860353045565540')
                    // Apenas o ID
                    .setStyle('SUCCESS'),
                //https://discordjs.guide/interactions/buttons.html#deferring-and-updating-the-button-message
            )
        await interaction.reply({ content: 'Pong!', components: [row], ephemeral: true});

        // FAZER ALGUMA COISA CASO O USUÁRIO CLIQUE NO BOTÃO:

        const filter = i => i.customId === 'primary';
        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });
        collector.on('collect', async i => {
            if (i.customId === 'primary') {
                await i.deferUpdate();
                await wait(4000);
                await i.editReply({ content: 'A button was clicked!', components: [] });
            }
        });
        collector.on('end', collected => {
            console.log(`Collected ${collected.size} items`);
        });
    },
};

