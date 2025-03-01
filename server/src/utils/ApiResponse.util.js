export default class ApiResponse {
  constructor(statusCode, msg, data) {
    this.statusCode = statusCode;
    this.message = msg;
    this.data = data;
  }
}
