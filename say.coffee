# Description:
#   Utility command to say things in a channel
#
# Commands:
#   Say <message> in <channel> - Says the message in the channel

module.exports = (robot) ->
    robot.respond /say (.+) in (.+)/i, (msg) ->
        room = msg.match[2]
        text = msg.match[1]
        user = { room: room }
        robot.send user, text
    robot.respond /say (.+)/i, (msg) ->
        room = '#hackny'
        text = msg.match[1]
        user = { room: room }
        robot.send user, text