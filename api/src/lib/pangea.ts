import { AuditService, EmbargoService, PangeaConfig } from 'pangea-node-sdk'

const DOMAIN = process.env.PANGEA_DOMAIN
const auditToken = process.env.PANGEA_AUDIT_TOKEN
const embargoToken = process.env.PANGEA_EMBARGO_TOKEN

const auditConfig = new PangeaConfig({
  domain: DOMAIN,
})

const embargoConfig = new PangeaConfig({
  domain: DOMAIN,
})

const audit = new AuditService(auditToken, auditConfig)
const embargo = new EmbargoService(embargoToken, embargoConfig)

export { audit, embargo }
