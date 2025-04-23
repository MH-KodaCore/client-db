# 1. `open_db_conn`

- Params

```json
{
    "conn_url": {
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
const open_db_conn = async () => {
    try {
        await invoke('open_db_conn', {
            conn_url: {
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
