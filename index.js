import { configDotenv } from 'dotenv';

import {Client, IntentsBitField} from 'discord.js';
import { reigsterCommands } from './registerCommands.js';
configDotenv();
//const { registerCommands } = require('./registerCommands.js');
const client = new Client({
    intents: [
        IntentsBitField.Flags.MessageContent
    ]
});


client.on('ready', (c) => {
    console.log(`${c.user.tag} is online`);
    (async () => await reigsterCommands())();

});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    
    if (interaction.commandName === 'hey') {
        interaction.reply('hey');

        
    }
    if (interaction.commandName === 'Ping') {
        interaction.reply('Pong');

        
    }
});

client.login(process.env.TOKEN);