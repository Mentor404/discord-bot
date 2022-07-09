const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionFlagsBits } = require('discord-api-types/v10');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Ban a member!')
        .addUserOption(option =>
            option.setName('target').setDescription('The member to ban'))
        // .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers | PermissionFlagsBits.BanMembers),
        .setDefaultMemberPermissions(0),
    // 0 = só aparece para o dono do server

    async execute(interaction) {
        await interaction.reply('Pong!');
        await interaction.deleteReply();

    },
};

