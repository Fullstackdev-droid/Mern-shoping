export const getAuthToken = () => {
    if (localStorage.getItem('admin_token')) {

        
        return localStorage.getItem('admin_token')
    }
    return '';
}