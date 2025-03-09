import MainLayout from "../../../layouts/MainLayout/MainLayout";
import LateralBar from "../../../components/LateralBar/LateralBar";
import UserReservations from "../../../components/UserReservations/UserReservations";

const reservations = [
    { id: 1, title: "Reserva 1", lab: "Lab A", date: "2023-01-01", startTime: "10:00", endTime: "11:00", purpose: "Meeting" },
    { id: 2, title: "Reserva 2", lab: "Lab B", date: "2023-01-02", startTime: "11:00", endTime: "12:00", purpose: "Conference" },
    { id: 3, title: "Reserva 3", lab: "Lab C", date: "2023-01-03", startTime: "12:00", endTime: "13:00", purpose: "Workshop" },
    { id: 4, title: "Reserva 4", lab: "Lab D", date: "2023-01-04", startTime: "13:00", endTime: "14:00", purpose: "Seminar" },
    
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
