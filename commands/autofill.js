const { SlashCommandBuilder } = require('@discordjs/builders');
const {setTimeout: wait} = require("node:timers/promises");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('autofill')
        .setDescription('Replies with Pong!')
        .addStringOption(option =>
            option
                .setName('name')
                .setDescription('Name of something')
                .setAutocomplete(true)
        ),

    async execute(interaction) {
        const focusedValue = interaction.options.getFocused();
        const choices = ['faq', 'install', 'collection', 'promise', 'debug'];
        const filtered = choices.filter(choice => choice.startsWith(focusedValue));
        await interaction.respond(
            filtered.map(choice => ({ name: choice, value: choice })),
        );
    }
}