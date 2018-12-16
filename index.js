module.exports = function LobbyCommand(m) {
    const cmd = m.command || m.require.command;
    
    cmd.add(['lobby', 'logout'], {
        $none() { m.send('C_RETURN_TO_LOBBY', 1, {}); } 
    })
}

