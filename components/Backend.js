import 'isomorphic-fetch';

const BACKEND_URL = 'http://localhost:3000/api';
const withCreds = {
    credentials: 'include'
};

export default class Backend {
    static async request(url, options) {
        const _r = await fetch(url, options);
        return await _r.json();
    }
    static async getAuth() {
        return await Backend.request(`${BACKEND_URL}/auth/`, withCreds);
    }

    static async logout() {
        return await Backend.request(`${BACKEND_URL}/auth/logout`, withCreds);
    }

    static async getPossibleEvents() {
        return await Backend.request(`${BACKEND_URL}/events/queryPossibleEvents`);
    }

    static async getMusicianTickets(fbid) {
        return await Backend.request(`${BACKEND_URL}/tickets/queryTicketByMusician/${fbid}`);
    }

    static async getEventInfoFromID(id) {
        return await Backend.request(`${BACKEND_URL}/events/getEventInfoFromID/${id}`)
    }
}
