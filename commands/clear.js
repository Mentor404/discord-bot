const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Apague mensagens do chat')
        .addIntegerOption(option => option.setName('amount').setDescription('Quantidade de mensagens a serem apagadas')),

    async execute(interaction) {
    //create a new command for cleaning chat
    const amount = interaction.options.getInteger('amount');
    const messages = await interaction.channel.messages.fetch({limit: amount});
    await interaction.channel.bulkDelete(messages);
    await interaction.reply({content: `${amount} mensagens foram apagadas!`, ephemeral: true});
    },
};
