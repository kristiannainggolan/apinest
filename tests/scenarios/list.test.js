import { assert } from "chai";
import ReqresAPI from "$root/pages/reqres.api";


describe('As a user, I want to get list data', () => {
    it('Should successfully get all data', async() => {
        const response = await ReqresAPI.list();

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["page", "per_page","total","total_pages", "data"]);
        
    });
});