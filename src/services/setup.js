import { request, config, mockRequest } from 'utils'

const { api } = config
const { users, integrations } = api

// export async function login (payload) {
//   return request(userLogin, {
//     method: 'post',
//     body: payload,
//   })
// }

export async function fetchUsers (payload) {
  return mockRequest({
    success: true,
    users: [{
      id: 1,
      fullName: 'Nelle Blake',
      email: 'nblake@gmail.com',
      invitation: 'SENT',
    }, {
      id: 2,
      fullName: 'Ellen Powers',
      email: 'ellen.powers@gmail.com',
      invitation: 'ACCEPTED',
    }, {
      id: 3,
      fullName: 'Alexander Reese',
      email: 'alexreese@gmail.com',
      invitation: 'ACCEPTED',
    }],
  })
}

export async function fetchApiIntegrations (payload) {
  return mockRequest({
    success: true,
    integrations: [{
      id: 1,
      type: 'SALESFORCE',
      object: 'Asset',
      frequency: {
        duration: 1.5,
        period: 'hours',
        at: '13:00',
      },
      expiry: '10/31/2017',
    }, {
      id: 2,
      type: 'ORACLE',
      object: 'Contract',
      frequency: {
        duration: 1,
        period: 'hours',
        at: '17:00',
      },
      expiry: '01/03/2018',
    }, {
      id: 3,
      type: 'SAP',
      object: 'Asset',
      frequency: {
        duration: 1,
        period: 'hours',
        at: '05:00',
      },
      expiry: '07/15/2018',
    }, {
      id: 4,
      type: 'TTSENSOR',
    }, {
      id: 5,
      type: 'TRUCKTRACK',
    }],
  })
}

export async function fetchDocumentUploads (payload) {
  return mockRequest({
    success: true,
    documents: [{
      id: 1,
      type: 'DOCUMENT',
      name: 'Bill of Lading',
      by: 'Kapil G',
      status: 'READY',
      expiry: '10/31/2017',
    }, {
      id: 1,
      type: 'DOCUMENT',
      name: 'Invoice',
      by: 'Chris K',
      status: 'READY',
      expiry: '08/31/2018',
    }, {
      id: 1,
      type: 'DOCUMENT',
      name: 'Purchase Order',
      by: 'Raj P',
      status: 'PENDING',
      expiry: '03/15/2019',
    }, {
      id: 1,
      type: 'DOCUMENT',
      name: 'Contract',
      by: 'Chris K',
      status: 'READY',
      expiry: '12/31/2017',
    }],
  })
}

export async function fetchSmartContracts (payload) {
  return mockRequest({
    success: true,
    contracts: [{
      id: 1,
      name: 'Bill Validation Contract',
      rules: [],
    }, {
      id: 2,
      name: 'Banana Order Contract',
      rules: [{
        id: 1,
        name: 'Temperature Rule',
        basedOn: 'TT Sensor', // will point to an integration
        image: '/img/temp_logic.png',
      }, {
        id: 2,
        name: 'GPS Location Rule',
        basedOn: 'Four Kites Truck Track', // will point to an integration
        image: '',
      }, {
        id: 3,
        name: 'Arrival Estimate Rule',
        basedOn: 'Four Kites Truck Track', // will point to an integration
        image: '',
      }, {
        id: 4,
        name: 'Shipment Number Validation Rule',
        basedOn: 'SAP Asset Read', // will point to an integration
        image: '',
      }],
    }, {
      id: 3,
      name: 'Apple Purchase Contract',
      rules: [],
    }],
  })
}
