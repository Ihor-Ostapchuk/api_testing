import { JsonRequest } from 'http-req-builder'

export class authController {
  async getAuth() {
    return (await new JsonRequest()
        .prefixUrl('https://lk.wfpro.com.ua/api/')
        .url('auth')
        .method('POST')
        .body({
            "action": "ticket",
            "service_id": this.uuidv4(),
            "rnokpp": "3536328162",
            "edrpou": "43919257",
            "organization_name": "QA_RB",
            "email": "Lavinia82@yahoo.com",
            "phone": "380938832472",
            "position": "QADynamic Accounts Facilitator",
            "name": "QA Blanca Konopelski"
        })
        .send()).body
}
 uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = Math.random() * 16 | 0; 
    let v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
}