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

    static async getEventInfoFromID(id) {
        return await Backend.request(`${BACKEND_URL}/events/getEventInfoFromID/${id}`)
    }

//////// Tickets Routes

    static async getMusicianTickets(fbid) {
        return await Backend.request(`${BACKEND_URL}/tickets/queryTicketByMusician/${fbid}`);
    }

//////// Musicians Routes

    static async getMusicianFromURL(id) {
        return await Backend.request(`${BACKEND_URL}/musicians/getMusicianInfoFromURL/${id}`)
    }

    static async createPaymentInformationMusician(id, body) {
        return await Backend.request(`${BACKEND_URL}/musicians/createPaymentInformation/${id}`, {
            "method": "POST",
            "Content-Type": "application/json",
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
            "Content-Type": "application/json",
            "body": JSON.stringify(body)
        })
    }

    static async deleteCustomerPaymentInfoUser(id) {
        return await Backend.request(`${BACKEND_URL}/users/deleteCustomerPaymentInfo/${id}`)
    }

//////// Transactions Routes

    static async getClientToken() {
        return await Backend.request(`${BACKEND_URL}/transactions/getClientToken`)
    }

    static async getTransactionHistory(customer_id) {
        return await Backend.request(`${BACKEND_URL}/transactions/getTransactionsByID/${customer_id}`)
    }
}
