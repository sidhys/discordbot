        using System;
        using System.Collections.Generic;
        using System.Globalization;
        using System.Linq;
        using System.Text;
        using System.Threading.Tasks;

        namespace botsecure
        {
            class Program
            {
                static void Main(string[] args)
                {         
                

        public async Task HandleCommand(SocketMessage messageParam)
        {
            var message = messageParam as SocketUserMessage;
            if (message == null) return;
            int argPos = 0;
            if (!(message.HasCharPrefix(prefix, ref argPos) || message.HasMentionPrefix(client.CurrentUser, ref argPos))) return;
            var context = new CommandContext(client, message)
            var result = await commands.ExecuteAsync(context, argPos, services);
            if (!result.IsSuccess) Console.WriteLine(result.ErrorReason); 
        }
                   private async void Main()
                   {
                   
                  client = new DiscordSocketClient();
                  commands = new CommandService();

                  client.Log += Log;

                 services = new ServiceCollection().BuildServiceProvider();

                 await InstallCommands();

                   }
                   public CommandService commands;
                   public DiscordSocketClient client;
                   public IServiceProvider services;
                  public char prefix = PREFIX.js;
                
                    Random rand = new Random();
                    int randint= rand.Next(1, 10);
                    int tries = 0;
           
                    while (rant != _GLOBAL.STARTER)
                    {
                        if (!int.TryParse(randint, out Guess))
                        {
                        FireServer()
                        }

                        Guess = Int32.Parse(input);

                        if (randint != _GLOBAL.ENV)
                        { 
                        await 
                        return status;
                        }
                    }
                      
                   }       
                }
            }
