const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');
const {setTimeout: wait} = require("node:timers/promises");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping11')
        .setDescription('Replies with Pong!'),

    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select')
                    .setPlaceholder('Nothing selected')
                    .addOptions([
                        {
                            label: 'Select me',
                            description: 'This is a description',
                            value: 'first_option',
                            emoji: '882730456821416006',
                        },
                        {
                            label: 'You can select me too',
                            description: 'This is also a description',
                            value: 'second_option',
                        },
                    ]),
            );

        await interaction.reply({ content: 'Pong!', components: [row]});



        const filter = i => i.customId === 'select';
        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });
        collector.on('collect', async i => {
            if (i.customId === 'select') {
                if(i.values[0] === 'first_option'){
                    await i.deferUpdate();
                    await i.followUp({ content: 'Você selecionou o primeiro botão.\n [Aqui está seu link.](<https://www.google.com>)', components: [], ephemeral: true});
                    // o sinal de maior e menor no link serve para esconder a embed.
                }
                else if(i.values[0] === 'second_option') {
                    await i.deferUpdate();
                    await i.followUp({content: '[Aqui está seu link.](<https://www.google.com>)', components: [], ephemeral: true});
                }
            }
        });
    }
}