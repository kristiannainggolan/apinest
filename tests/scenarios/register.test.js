import chai, { assert,expect } from "chai";
import jsonSchema from "chai-json-schema";
import ReqresAPI from "$root/pages/reqres.api";
import * as data from "$root/data/user.data";
import * as schema from "$root/schema/register.schema";

chai.use(jsonSchema);

describe('As a guest, I want to register',() => {
    it('Should successfully register using valid account', async() =>{
        const response = await ReqresAPI.register(data.VALID_REGISTER);

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["id", "token"]);
        assert.isNumber(response.data.id);
        assert.isString(response.data.token);
        expect(response.data).to.be.jsonSchema(schema.VALID_REGISTER_SCHEMA);
    });

    it('Should unsuccessfully register using invalid account', async() => {
        const response = await ReqresAPI.register(data.INVALID_REGISTER);

        assert.equal(response.status, 400);
        assert.containsAllKeys(response.data, "error");
    });
});



