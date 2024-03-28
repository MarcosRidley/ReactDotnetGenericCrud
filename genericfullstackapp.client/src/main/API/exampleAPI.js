export default {
    getTime: async (route, opt) => {
        const result = fetch(route, opt);
        const json = await result.JSON();
        return json;
    } 
};