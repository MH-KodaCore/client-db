# `close_db_conn`

- Response

a) on success: `null`
b) on error: `string`

- Example

```typescript
const closeConn = async () => {
    try {
        await invoke('close_db_conn')
    } catch (error) {
        console.log(`Ooops...: ${error}`)
    }
}
```
