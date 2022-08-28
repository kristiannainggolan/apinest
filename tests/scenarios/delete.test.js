import { assert } from "chai";
import ReqresAPI from "$root/pages/reqres.api";

describe('As a admin, I want to delete', () => {
    it('Should successfully delete user', async() => {
        const response = await ReqresAPI.delete();

        assert.equal(response.status, 204);
    });
});