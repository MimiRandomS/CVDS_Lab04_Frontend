import MainLayout from "../../../layouts/MainLayout/MainLayout";
import LateralBar from "../../../components/LateralBar/LateralBar";
import UserReservations from "../../../components/UserReservations/UserReservations";

const reservations = [
    { id: 1, title: "Reserva 1" },
    { id: 2, title: "Reserva 2" },
    { id: 3, title: "Reserva 3" },
    { id: 3, title: "Reserva 4" },
    
];

const UserReservationsPage = () => {
    return (
        <MainLayout 
            leftContent={<LateralBar />} 
            rightContent={
                <UserReservations reservations={reservations} />
            }
        />
    );
};

export default UserReservationsPage;
