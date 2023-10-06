export const config = {
  mqtt: {
    broker: "172.20.10.4",
    connectOptions: {
      clientId: `homematic-telegraf-${new Date().getTime()}`,
      connectTimeout: 10 * 1000,
    },
    qos: 0,
  },
  common: {
    vendor: "homematic",
    measurement: "electricity",
    fieldsOfInterest: {
      POWER: "power",
      CURRENT: "current",
      VOLTAGE: "voltage",
      ENERGY_COUNTER: "sum_power_total",
    },
  },
  devices: [
    {
      id: "0001D569A57FCA:6",
      friendly: "Server",
    },
  ],
};