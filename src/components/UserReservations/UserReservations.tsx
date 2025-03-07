import styles from "./UserReservations.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import IconLink from "../IconLink/IconLink";
import infoIcon from "../../assets/public/info.ico";

type Reservation = {
  id: number;
  title: string;
};

type Props = {
  readonly reservations: Reservation[];
};

function UserReservations({ reservations }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.listReservations}>
        {reservations.map((reservation) => (
          <Card key={reservation.id} title={reservation.title} className={styles.card}>
            <Button text="Ver" className={styles.btn}/>
            <IconLink href="#" src={infoIcon} alt="información reserva" />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default UserReservations;
