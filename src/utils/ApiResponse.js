class ApiResponse {
    constructor(statuscode, data, message = "success"){
       this.statusCodr = statuscode 
       this.data = data 
       this.message = message
       this.success = statuscode <400

    }
}