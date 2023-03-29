

export class Gift {
  constructor(data) {
    this.id = data._id
    this.tag = data.tag || ''
    this.url = data.url || 'https://images.unsplash.com/photo-1592903297149-37fb25202dfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'
    this.opened = data.opened ? data.opened : false
  }
}