import { JsonRequest } from 'http-req-builder'
import { State } from '../state/state'

export class catalogController {
    async getRegionList() {
        return (await new JsonRequest()
            .prefixUrl('https://lk.wfpro.com.ua/api/')
            .url('catalog/region/list')
            .method('GET')
            .bearerToken(State.getToken())
            .send()).body;
    }
}