interface ApiResponse<T> {
  status: string;
  message: string;
  data?: T;
  token?: string;
}

export default ApiResponse;
