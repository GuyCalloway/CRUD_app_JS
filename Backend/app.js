class MessageApp {
  constructor() {
    this.messages = []
  }
  // C
  post(content) {
    let item = {
      id: newId(this.messages),
      content: content,
      date: new Date()
    }
    this.messages.push(item)
    return this.messages
  }
  // R
  get(id) {
    return this.messages.filter(message => message.id === id)[0]
  }
  // U
  update(id, update) {
    let index = this.messages.findIndex(message => message.id === id)
    this.messages[index].content = update
  }
  // D
  delete(id) {
    this.messages = this.messages.filter(message => message.id != id)
    return this.messages
  }
}

function newId(array) {
  if (array.length > 0) {
    return array[array.length - 1].id + 1;
  } else {
    return 1
  }
}

export default MessageApp