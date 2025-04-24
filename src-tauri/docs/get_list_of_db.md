# `get_list_of_db`

- Response

a) on success: string[]
b) on error: `string`

- Example

```typescript
const getListOfDB = async () => {
    try {
        const res = await invoke('get_list_of_db')
        console.log(res)
    } catch (error) {
        console.log(`Ooops...: ${error}`)
    }
}
```
