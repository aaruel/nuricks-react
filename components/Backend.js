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

//////// Auth Routes

    static async getAuth() {
        return await Backend.request(`${BACKEND_URL}/auth/`, withCreds);
    }

    static async logout() {
        return await Backend.request(`${BACKEND_URL}/auth/logout`, withCreds);
    }

//////// Events Routes

    static async getPossibleEvents() {
        return await Backend.request(`${BACKEND_URL}/events/queryPossibleEvents`);
    }

    static async getAllEvents() {
        return await Backend.request(`${BACKEND_URL}/events/allEvents`);
    }

    static async getEventInfoFromID(id) {
        return await Backend.request(`${BACKEND_URL}/events/getEventInfoFromID/${id}`)
    }

    static async updateEvent(copy) {
        return await Backend.request(`${BACKEND_URL}/events/updateEventInfo`, {
            "method": "POST",
            headers: new Headers({"Content-Type": "application/json"}),
            "body": JSON.stringify(copy)
        });
    }

    static async createEvent(copy) {
        return await Backend.request(`${BACKEND_URL}/events/createEvent`, {
            "method": "POST",
            headers: new Headers({"Content-Type": "application/json"}),
            "body": JSON.stringify(copy)
        });
    }

//////// Tickets Routes

    static async getMusicianTickets(fbid) {
        return await Backend.request(`${BACKEND_URL}/tickets/queryTicketByMusician/${fbid}`);
    }

    static async getTicketFromEventID(id) {
        return await Backend.request(`${BACKEND_URL}/tickets/queryTicketByEventID/${id}`);
    }

//////// Musicians Routes

    static async getMusicianFromURL(id) {
        return await Backend.request(`${BACKEND_URL}/musicians/getMusicianInfoFromURL/${id}`)
    }

    static async getAllMusicians() {
        return await Backend.request(`${BACKEND_URL}/musicians/allMusicians`)
    }

    static async getMusicianFromFbid(fbid) {
        return await Backend.request(`${BACKEND_URL}/musicians/getMusicianInfoFromID/${fbid}`)
    }

    static async saveMusician(musician) {
        return await Backend.request(`${BACKEND_URL}/musicians/updateMusicianInfo`, {
            "method": "POST",
            "headers": new Headers({"Content-Type": "application/json"}),
            "body": JSON.stringify(musician)
        });
    }

    static async createPaymentInformationMusician(id, body) {
        return await Backend.request(`${BACKEND_URL}/musicians/createPaymentInformation/${id}`, {
            "method": "POST",
            "headers": new Headers({"Content-Type": "application/json"}),
            "body": JSON.stringify(body)
        });
    }

    static async deleteCustomerPaymentInfoMusician(id) {
        return await Backend.request(`${BACKEND_URL}/musicians/deleteCustomerPaymentInfo/${id}`)
    }

//////// Users Routes

    static async createPaymentInformationUser(id, body) {
        return await Backend.request(`${BACKEND_URL}/users/createPaymentInformation/${id}`, {
            "method": "POST",
            "headers": new Headers({"Content-Type": "application/json"}),
            "body": JSON.stringify(body)
        })
    }

    static async deleteCustomerPaymentInfoUser(id) {
        return await Backend.request(`${BACKEND_URL}/users/deleteCustomerPaymentInfo/${id}`)
    }

//////// Admins Routes

    static async adminLogin(username, password) {
        return await Backend.request(`${BACKEND_URL}/admins/login`, {
            "method": "POST",
            "headers": new Headers({"Content-Type": "application/json"}),
            "body": JSON.stringify({username, password})
        })
    }

//////// Transactions Routes

    static async getClientToken() {
        return await Backend.request(`${BACKEND_URL}/transactions/getClientToken`)
    }

    static async getTransactionHistory(customer_id) {
        return await Backend.request(`${BACKEND_URL}/transactions/getTransactionsByID/${customer_id}`)
    }
}
