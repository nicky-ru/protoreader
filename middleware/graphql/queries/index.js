const getApps = /* Graphql */ `
  query app {
    applications {
      id
      version
      uri
      avatar
    }
  }
`

const getDevices = /* Graphql */ `
  query devices {
    devices {
      id
      name
      address
      firmware
      lastDataTime
      state  # Device status, can be null if not updated
      status # Registration status, 1=pending, 2=confirmed
      name
      data
      config
      owner
    }
  }
`

const getMyDevices = /* Graphql */ `
  query devices($owner: String!) {
    devices(where: { owner: $owner }) {
      id
      name
      address
      owner
    }
  }
`

const deviceRecords = /* Graphql */ `
  query records($imei: String!) {
    deviceRecords(orderBy: timestamp, orderDirection:desc, first: 20, where: { imei: $imei }) {
      raw # Protobuf encoded sensors values
      imei
      signature
      timestamp
    }
  }
`

module.exports = {
    getApps: getApps,
    getDevices: getDevices,
    deviceRecords: deviceRecords,
    getMyDevices: getMyDevices
}