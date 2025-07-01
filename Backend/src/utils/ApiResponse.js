class ApiResponse{
    constructor(status, message, data = null) {
        this.status = status;
        this.message = message;
        this.data = data;
        this.success=statusCode<400; // Assuming status codes < 400 are successful
    }
    
    static success(message, data = null) {
        return new ApiResponse('success', message, data);
    }
    
    static error(message, data = null) {
        return new ApiResponse('error', message, data);
    }
    
    toJSON() {
        return {
        status: this.status,
        message: this.message,
        data: this.data
        };
    }
}