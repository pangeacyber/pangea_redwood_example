import { AuditService, EmbargoService, PangeaConfig } from 'node-pangea'

const DOMAIN = process.env.PANGEA_DOMAIN
const auditToken = process.env.PANGEA_AUDIT_TOKEN
const auditConfigId = process.env.PANGEA_AUDIT_CONFIG_ID
const embargoToken = process.env.PANGEA_EMBARGO_TOKEN
const embargoConfigId = process.env.PANGEA_EMBARGO_CONFIG_ID

const auditConfig = new PangeaConfig({
  configId: auditConfigId,
  domain: DOMAIN,
})

const embargoConfig = new PangeaConfig({
  configId: embargoConfigId,
  domain: DOMAIN,
})

const audit = new AuditService(auditToken, auditConfig)
const embargo = new EmbargoService(embargoToken, embargoConfig)

export { audit, embargo }
