module.exports = class Router {
  constructor() {
    this.endpoints = {}
  }

  // endpoints = {
  //   '/users': {
  //     'GET': handler1,
  //     'POST': handler2,
  //     'DELETE': handler3,
  //   }
  // }

  request(method = 'GET', path, handler) {
  
    if (!this.endpoints[path]) {
      this.endpoints[path] = {}
    }

    // /users [GET POST PUT] /posts [GET POST PUT DELETE]
    const endpoint = this.endpoints[path];


    if (endpoint[method]) {
      throw new Error(`[${method}] по адресу ${path} уже существует`);
    }

    endpoint[method] = handler;

    // [path]:[method]
    // [/users]:[get]
    // [/users]:[post]
    // [/posts]:[delete]

    // emitter.on(`[${path}]:[${method}]`, (req, res) => {
    //   handler(req, res);
    // })
  }

  get(path, handler) {
    this.request('GET', path, handler);
  }
  post(path, handler) {
    this.request('POST', path, handler);
  }
  put(path, handler) {
    this.request('PUT', path, handler);
  }
  delete(path, handler) {
    this.request('DELETE', path, handler);
  }
};