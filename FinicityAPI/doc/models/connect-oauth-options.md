
# Connect Oauth Options

oauthOptions for oauthEnabled institutions

## Structure

`ConnectOauthOptions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean` | Required | Indicates if OAuth institutions should be enabled for the session |
| `autoReplace` | `boolean \| undefined` | Optional | If set to true, Connect will replace OAuth institutions based on the customer's existing accounts. e.g if the customer has a legacy Chase account, legacy Chase will be used throughout the session but if the user doesn't have a Capital One legacy account, OAuth Capital One will be used for the session. |
| `institutions` | `unknown \| undefined` | Optional | Provides the ability to control what institutions should or shouldn't be displayed to the user |

## Example (as JSON)

```json
{
  "enabled": false,
  "autoReplace": null,
  "institutions": null
}
```

