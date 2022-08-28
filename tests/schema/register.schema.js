export const VALID_REGISTER_SCHEMA = {
    "type": "object",
    "default": {},
    "required": [
        "id",
        "token"
    ],
    "properties": {
        "id": {
            "type": "integer",
            "default": 0
        },
        "token": {
            "type": "string",
            "default": ""
        }
    }
}