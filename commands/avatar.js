const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Veja o avatar de um usuário')
        .addUserOption(option => option.setName('alvo').setDescription('Selecione um usuário').setRequired(true)),

    async execute(interaction) {
        const member = interaction.options.getMember('alvo');
        const avatar = member.user.displayAvatarURL({dynamic: true, size: 1024});
        //show gif avatar

        const embed = new MessageEmbed()
            .setColor(member.user.color)
            .setTitle(`Avatar de \`\`${member.user.tag}\`\``)
            .setImage(avatar)
            .setTimestamp()
            .setFooter({text: `${member.guild.name}`, iconURL: member.guild.iconURL()});

        await interaction.reply({embeds: [embed]});
    }
}