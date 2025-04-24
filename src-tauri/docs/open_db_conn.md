# `open_db_conn`

- Params

```json
{
    "connUrl": {
        "host": "string",
        "port": "string",
        "user": "string",
        "password": "string",
        "db_name": "string"
    }
}
```

- Response

a) on success: `null`
b) on error: `string`

- Example

```typescript
const openConn = async () => {
    try {
        await invoke('open_db_conn', {
            connUrl: {
                host: "localhost",
                port: "5432",
                user: "postgres",
                password: "2606",
                db_name: "postgres"
            }
        })
    } catch (error) {
        console.log(`Ooops...: ${error}`)
    }
}
```
