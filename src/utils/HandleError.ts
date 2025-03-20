const handleApiError = (error: any): never => {
  console.error("Error recibido:", error);
  console.error("Error response:", error.response);

  const errorMessage =
    error.response?.data?.message ||
    error.response?.data?.error ||
    (typeof error.response?.data === "string"
      ? error.response.data
      : "Error en la comunicación con la API");

  throw new Error(errorMessage);
};

export default handleApiError;
