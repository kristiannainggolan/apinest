import { assert } from "chai";
import ReqresAPI from "$root/pages/reqres.api";
import * as data from "$root/data/user.data";


describe('As a admin, I want to update user data', () => {
    it('Should successfully update user data', async() => {
        const response = await ReqresAPI.update(data.USER_DATA);

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["name", "job", "updatedAt"]);
        assert.isString(response.data.name);
        assert.isString(response.data.job);
    });

    it('Should successfully update user data', async() => {
        const response = await ReqresAPI.patch(data.USER_DATA);

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["name", "job", "updatedAt"]);
        assert.isString(response.data.name);
        assert.isString(response.data.job);
    });
});