export const VALID_UPDATE_SCHEMA = {
    "type": "object",
    "default": {},
    "required": [
        "name",
        "job",
        "updatedAt"
    ],
    "properties": {
        "name": {
            "type": "string",
            "default": ""
        },
        "job": {
            "type": "string",
            "default": ""
        },
        "updatedAt": {
            "type": "string",
            "default": ""
        }
    }
}