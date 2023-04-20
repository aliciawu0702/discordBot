const { REST, Routes, SlashCommandBuilder } = require('discord.js');
const {  id } = require('../../../setting.json');
const { Client, GatewayIntentBits } = require('discord.js');


require('dotenv').config();
const token = process.env.DISCORD_TOKEN;

//#region old
const commands = [
    {
        name: '夭夭打招呼',
        description: '海夭不屑的說',
    },
    {
        name: '夭夭放技能',
        description: '看我的厲害~你們都去鼠',
    },
    {
        name: '海夭占卜',
        description: '來看看你今天運勢阿',
    },
    {
        name: '夭夭抽卡',
        description: '翻開覆蓋的卡',
    },
    {
        name: '萬褲歸一',
        description: '夭夭說:「萬褲歸一」',
    },
    {
        name: '一褲成神',
        description: '夭夭說:「一褲成神」',
    },
    {
        name: '千褲破',
        description: '夭夭說:「千褲破」',
    },
    {
        name: '破褲',
        description: '夭夭說:「破褲」',
    },
    {
        name: '殺褲',
        description: '夭夭說:「殺褲」',
    },
    {
        name: '褲致命',
        description: '夭夭說:「褲致命」',
    },
    {
        name: '褲囚',
        description: '夭夭說:「褲囚」',
    },
    {
        name: '死亡狙褲',
        description: '夭夭說:「死亡狙褲」',
    },
    {
        name: '澄空略褲',
        description: '夭夭說:「澄空略褲」',
    },
    {
        name: '褲池領域',
        description: '夭夭說:「褲池領域」',
    },
    {
        name: '給褲',
        description: '夭夭新用詞',
    },

  ];
//#endregion



const rest = new REST({ version: '10' }).setToken(token);

(async () => {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(id), { body: commands })
    .then((data) => console.log(`Successfully registered ${data.length} application commands.`))
    .catch(console.error);

})();