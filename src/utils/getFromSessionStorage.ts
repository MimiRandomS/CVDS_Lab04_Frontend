const getUserFromSessionStorage = () => {
  const userString = sessionStorage.getItem("user");

  if (!userString) {
    console.warn("No se encontró el usuario en sessionStorage");
    return null;
  }

  try {
    const user = JSON.parse(userString);
    if (!user.id) {
      console.warn("El usuario no tiene un ID válido");
      return null;
    }
    return user;
  } catch (error) {
    console.error("Error al parsear el usuario:", error);
    return null;
  }
};

export default getUserFromSessionStorage;
