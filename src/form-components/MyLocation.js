import { notifications } from "@mantine/notifications";
import { IconX } from "@tabler/icons-react";

function MyLocation(form) {
  navigator.geolocation.getCurrentPosition((pos) => {
    const { latitude, longitude } = pos.coords;
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        form.setFieldValue(
          "originCountry",
          data.address.city + " ," + data.address.country
        );
      })
      .catch((err) => {
        console.log(err);

        notifications.show({
          color: "red",
          autoClose: 5000,
          radius: 15,
          icon: <IconX />,
          style: { opacity: 0.95 },
          title: "Please turn on you location services",
          message:
            'In order to use "use my location" option you must open your location services in your website setting',
        });
      });
  });
}

export default MyLocation;
