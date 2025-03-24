interface UserDto {
  id: string;
  name: string;
  email: string;
  reservations: string[];
  role: "ADMIN" | "PROFESOR";
}

export default UserDto;
