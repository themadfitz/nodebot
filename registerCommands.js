import { configDotenv } from 'dotenv';
configDotenv();
import { REST, Routes } from 'discord.js';

const commands = [
    {
        name: 'hey',
        description: 'Replies with hey!',
    },
];


const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

const reigsterCommands = async () => {
    try {

        console.log('Registering slash commands...');
        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),{body:commands}
            // Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            // { body: commands }
        );
        console.log('Slash commands were reistered successfully!');
    }

    catch (error) {
        console.log(`There was an error: ${error}`);
    }
}; 

export {reigsterCommands};