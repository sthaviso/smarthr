const APIV1 = '/api/v1'

const INTEGRATIONS = {
  SALESFORCE: {
    logo: '/integrations/salesforce.png',
    name: 'Salesforce',
  },
  ORACLE: {
    logo: '/integrations/oracle.png',
    name: 'Oracle',
  },
  SAP: {
    logo: '/integrations/sap.png',
    name: 'SAP',
  },
  TTSENSOR: {
    logo: '/integrations/avery_dennison.png',
    name: 'Avery Dennison TT Sensor',
  },
  TRUCKTRACK: {
    logo: '/integrations/fourkites.png',
    name: 'Four Kites Truck Track',
  },
  REST: {
    logo: '/integrations/rest.png',
    name: 'JSON Endpoint',
  },
  DOCUMENT: {
    logo: '/integrations/document.png',
    name: 'Document Upload',
  },
}

module.exports = {
  name: 'ESS',
  api: {
    userLogin: `${APIV1}/user/login`,
  },
  integrations: INTEGRATIONS,
}
