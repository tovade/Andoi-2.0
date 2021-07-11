const Command = require("../../struct/Command");
const AndoiEmbed = require("../../struct/AndoiEmbed");
const { Message } = require("discord.js");
const filters = require("../../assets/json/filters.json");
module.exports = class PingCommand extends Command {
  constructor(...args) {
    super(...args, {
      name: "filter",
      desc: "Set a filter",
      usage: "[filter]",
      example: ["cursed"],
      category: "music",
      guildOnly: true,
      ownerOnly: false,
      userPerms: [],
      botPerms: [],
      nsfw: false,
      args: ["filter"],
      voice: true,
      sameVoice: false,
      playing: true,
    });
  }
  /**
   * @param {Message} message
   * @param {Array} args
   */
  async run(message, args) {
    const lang = await this.lang.getFile(message.guild);
    const filterToUpdate = Object.values(filters).find(
      (f) => f.toLowerCase() === args[0].toLowerCase()
    );

    if (!filterToUpdate)
      return message.channel.send({
        content: `${this.client.emotes.error} - ${lang.MUSIC.FILTER_NOT_EXIST}`,
      });

    const filterRealName = Object.keys(client.filters).find(
      (f) => client.filters[f] === filterToUpdate
    );

    const queueFilters = this.client.player.getQueue(message).filters;
    const filtersUpdated = {};
    filtersUpdated[filterRealName] = queueFilters[filterRealName]
      ? false
      : true;
    this.client.player.setFilters(message, filtersUpdated);

    if (filtersUpdated[filterRealName])
      message.channel.send({
        content: `${this.client.emotes.music} - ${lang.MUSIC.ADDING_FILTER}`,
      });
    else
      message.channel.send({
        content: `${this.client.emotes.music} - ${lang.MUSIC.DISABLING_FILTER}`,
      });
  }
};
