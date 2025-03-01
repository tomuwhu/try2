export const load = async (event) => {
    return {
        user: event.locals.user,
        cica: 23654723654
    }
}
export const actions = {
    cica: async (event) => {
        var data = await event.request.formData();
        console.log(data.get('cica'))
    },
    kutya: async (event) => {
        var data = await event.request.formData();
        console.log(Number(data.get('cica')) + 1)
    }
}