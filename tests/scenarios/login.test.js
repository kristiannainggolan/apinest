import chai, { assert, expect } from "chai";
import jsonSchema from "chai-json-schema";
import ReqresAPI from "$root/pages/reqres.api";
import * as data from "$root/data/user.data";
import * as schema from "$root/schema/login.schema";

chai.use(jsonSchema);

describe('As as user, i want to login',() => {
    it('Should successfully login using valid account', async() =>{
        const respone = await ReqresAPI.login(data.VALID_LOGIN);

        assert.equal(respone.status, 200);
        assert.containsAllKeys(respone.data, "token");
        assert.isString(respone.data.token);
        expect(respone.data).to.be.jsonSchema(schema.VALID_LOGIN_SCHEMA)
    });

    it('Should fail login using invalid account', async() =>{
        const respone = await ReqresAPI.login(data.INVALID_LOGIN);

        assert.equal(respone.status, 400);
        assert.containsAllKeys(respone.data, "error");
    });
});