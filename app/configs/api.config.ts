export const API_URL = `${process.env.APP_URL}/api`;

export const getAuthUrl = (string: string = "") => `/auth/${string}`;
export const getBookingUrl = (string: string = "") => `/bookings/${string}`;
export const getRoomUrl = (string: string = "") => `/rooms/${string}`;
