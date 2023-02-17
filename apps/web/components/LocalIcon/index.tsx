import Image from "next/image";
import Cake from "./cake.svg";

export default function LocalIcon() {
  return (
    <Image src={Cake.src} alt="Picture of the cake" width={250} height={250} />
  );
}
