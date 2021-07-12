import { strict as assert } from 'assert'
import { authController } from '../api/controller/auth.controller'
import { State } from '../api/state/state'


describe('Користувач може', () => {
    it('Авторизуватись', async function () {
        const auth = new authController()
        const body = await auth.getAuth();
        State.setToken(body['session_token'])
        let getToken = State.getToken()
        assert(body)
    })
}) 