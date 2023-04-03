const { Client, GatewayIntentBits, AttachmentBuilder, EmbedBuilder, Embed  } = require('discord.js');
const { id } = require('./setting.json')
const express = require('express')
const path = require('path')
const cool = require('cool-ascii-faces')

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
require('dotenv').config();
const token = process.env.DISCORD_TOKEN;
const PORT = process.env.PORT || 5001

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  const number = Math.floor(Math.random()*100);

  switch(interaction.commandName){
    case '夭夭打招呼':
        const HiAry =['去鼠la','請去你ㄇㄉ','你啥小','敲理嗎']
        await interaction.reply(HiAry[(number%4)]);
    break;

    case '夭夭放技能':
    const skillAry = ['奔褲衝', '鎖擒褲', '破褲','絕對守褲','飛褲','降褲']
    await interaction.reply(skillAry[(number%6)]);
    break;

    case '海夭占卜':
        const sayAry = ['你今天會衰', '小心被狗咬褲子', '你好像有點好運','天吶~你出運了!','你頭上一個字『危』',
        '大吉大利今晚吃雞','小心上廁所沒衛生紙','今天會被騙財~','今天會被騙色~','你今天會跟茶茶一樣好運!']
        await interaction.reply(sayAry[(number%8)]);
        break;

    case '夭夭抽卡':
        const i = (number%11) == 0 ? 1 : (number%11);
        const attachment = new AttachmentBuilder('./src/img/'+ i +'.png', { name: i+'.png' })
        const embed = new EmbedBuilder()
        .setTitle('你去鼠la')
        await interaction.reply({embeds: [embed], files: [attachment]})
        
    break;

    case '萬褲歸一':
        await interaction.reply('萬褲歸一');
    break;

    case '一褲成神':
        await interaction.reply('一褲成神');
    break;

    case '千褲破':
        await interaction.reply('千褲破');
    break;

    case '破褲':
        await interaction.reply('破褲');
    break;

    case '殺褲':
        await interaction.reply('殺褲');
    break;

    case '褲致命':
        await interaction.reply('褲致命');
    break;

    case '褲囚':
        await interaction.reply('褲囚');
    break;

    case '死亡狙褲':
        await interaction.reply('死亡狙褲');
    break;

    case '澄空略褲':
        await interaction.reply('澄空略褲[擊倒並搶走褲子]');
    break;

    case '褲池領域':
        await interaction.reply('褲池·領域');
    break;
  }

});

client.login(token);