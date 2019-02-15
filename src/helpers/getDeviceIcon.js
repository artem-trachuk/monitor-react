const getDeviceIcon = deviceType => {
  switch (deviceType) {
    case "camera":
      return "record";
    case "recorder":
      return "hdd";
    case "netdev":
      return "microchip";
    default:
      return "";
  }
};

export default getDeviceIcon;
