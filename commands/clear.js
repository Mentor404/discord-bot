const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Apague mensagens do chat'),
    async execute(interaction) {
        await interaction.reply('Function');
    },
};
