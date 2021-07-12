

export class StateService {
  token: string = ''

  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    return ('Bearer ' + this.token)
  }


}

export const State = new StateService();