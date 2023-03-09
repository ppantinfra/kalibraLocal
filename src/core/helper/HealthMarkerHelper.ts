const getHealthMarkers = (
  allHealthMarkers?: Array<any>,
  externalKeys?: any
): Array<any> => {
  const healthMarkers: Array<any> = [];
  Object.keys(externalKeys).forEach((key) => {
    const hm = allHealthMarkers?.find((item) => item.externalKey === key);
    healthMarkers.push(
      hm !== undefined
        ? { ...hm, name: externalKeys[key] }
        : { name: externalKeys[key] }
    );
  });
  return healthMarkers;
};

const HealthMarkerHelper = {
  getHealthMarkers,
};

export default HealthMarkerHelper;
