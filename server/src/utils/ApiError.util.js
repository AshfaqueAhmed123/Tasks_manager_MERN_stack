export default class ApiError {
  constructor(statusCode, msg) {
    this.statusCode = statusCode;
    this.message = msg || "something went wrong";
  }
}
