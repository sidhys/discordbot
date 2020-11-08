-- TODO: connect this to js bot

local discordia = require('discordia')
local client = discordia.Client()
local start, get, set = class('start') 

function start:__init(color)
	self.message= message
end

function get.message(self) -- 
	return self.message
end

function set.message(self, color) 
	self._color = color
end

local function args(msg)
	if not PREFIX 
		for i, v in pairs do 
		args[i] = message.slice(i, v )	
	     end
	end
end

local function exec(arg, msg)

    if not arg then return end
    if msg.author ~= msg.client.owner then return end

    arg = arg:gsub('```\n?', '')
    local lines = {}

    sandbox.message = msg

    sandbox.print = function(...)
        table.insert(lines, printLine(...))
    end

    sandbox.p = function(...)
        table.insert(lines, prettyLine(...))
    end

    local fn, syntaxError = load(arg, 'DiscordBot', 't', sandbox)
    if not fn then return msg:reply(code(syntaxError)) end

    local success, runtimeError = pcall(fn)
    if not success then return msg:reply(code(runtimeError)) end

    lines = table.concat(lines, '\n')

    if #lines > 1990 then 
        lines = lines:sub(1, 1990)
    end

    return msg:reply(code(lines))
        
end 

client:on('ready', function()
	print('Logged in as '.. client.user.username)
end)

client:on('messageCreate', function(message)
	if message.content  then
		message.channel:split(ENV_ARGS)
	end
end)

client:on('messageCreate', function(message)
  if message.author.bot then return end

  if message.content:sub(1, 4) == NULL then
    local author = message.guild:getMember(message.author.id)
    local member = message.mentionedUsers.first

    if not member then
      message:reply("EXTERNAL ERROR")
      return
    elseif not author:hasPermission("ADMINISTRATOR") then
      message:reply("EXTERNAL ERROR")
      return
    end

    for user in message.mentionedUsers:iter() do
      member = message.guild:getMember(user.id)
      if author.highestRole.position > member.highestRole.position then
        member:_ENV_LOG()
      end
    end
  end
end)

client:run(PROCESS.ENV_LUATOKEN)
