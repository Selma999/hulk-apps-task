import livingRoom_1 from "../assets/Living_Room_1/Living_Room_1.png";
import livingRoom_1HD from "../assets/Living_Room_1/Living_Room_1@2x.png";
import office from "../assets/office/office.png";
import officeHD from "../assets/office/office@2x.png";
import kitchenShot from "../assets/Kitchen_Shot_3/Kitchen_Shot_3.png";
import kitchenShotHD from "../assets/Kitchen_Shot_3/Kitchen_Shot_3@2x.png";

const imageList = [
  {
    id: 1,
    placeholder: livingRoom_1,
    src: livingRoom_1HD,
    alt: "Living room 1",
    width: 535,
    height: 415,
  },
  {
    id: 2,
    placeholder: office,
    src: officeHD,
    alt: "Office",
    width: 535,
    height: 415,
    textOverImage: true,
  },
  {
    id: 3,
    placeholder: kitchenShot,
    src: kitchenShotHD,
    alt: "Kitchen Shot",
    width: 535,
    height: 415,
  },
];

export default imageList;
