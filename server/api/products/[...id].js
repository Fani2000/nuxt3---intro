
export default defineEventHandler(async(event) => {
    const {id} = event.context.params;
    console.log(id)
    return {
        message: 'Welcome home'
    }
})