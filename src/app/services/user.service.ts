export class UserService {

    getUser(id: string) {
        if (id === '1') {
            return {
                id: '1',
                name: 'Leela'
            }
        } else {
            return {
                id: '1',
                name: 'Krishna'
            }
        }
    }
}