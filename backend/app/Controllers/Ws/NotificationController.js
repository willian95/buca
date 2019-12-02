'use strict'

class NotificationController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request

  }

  onMessage () {
    this.socket.broadcastToAll('message', "hello")
  }

}

module.exports = NotificationController
