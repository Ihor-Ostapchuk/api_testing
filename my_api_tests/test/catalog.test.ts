import { strict as assert } from 'assert'
import { catalogController } from '../api/controller/catalog.controller'


describe('Користувач може', () => {
        it('Отримати список областей', async function () {
            const regionList = new catalogController()
            const body = await regionList.getRegionList();
            console.log(body)
            assert(body)
    })
}) 