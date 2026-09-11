import { mergeLocaleValues } from '../i18n/locale'

function mergePresentationList(canonical = [], presentation = []) {
  return canonical.map((item, index) => mergeLocaleValues(item, presentation[index]))
}

export function getLocalizedCampaign(campaign, localeBundle = {}) {
  if (!campaign) return campaign
  const presentation = localeBundle.campaigns?.records?.[campaign.id]
  return {
    ...mergeLocaleValues(campaign, { ...presentation, stages: undefined }),
    stages: mergePresentationList(campaign.stages, presentation?.stages),
    treatment: localeBundle.campaigns?.treatments?.[campaign.treatment] ?? campaign.treatment,
    routeConfidence: localeBundle.campaigns?.routeConfidence?.[campaign.routeConfidence] ?? campaign.routeConfidence,
  }
}

export function getLocalizedOrganization(organization, localeBundle = {}) {
  if (!organization) return organization
  const presentation = localeBundle.organizations?.records?.[organization.id]
  return {
    ...mergeLocaleValues(organization, { ...presentation, nameHistory: undefined }),
    nameHistory: mergePresentationList(organization.nameHistory, presentation?.nameHistory),
    type: localeBundle.organizations?.types?.[organization.type] ?? organization.type,
  }
}

export function getLocalizedCompany(company, localeBundle = {}) {
  if (!company) return company
  const presentation = localeBundle.companies?.records?.[company.id]
  return {
    ...mergeLocaleValues(company, { ...presentation, ownershipHistory: undefined }),
    ownershipHistory: mergePresentationList(company.ownershipHistory, presentation?.ownershipHistory),
    companyType: localeBundle.companies?.types?.[company.companyType] ?? company.companyType,
  }
}
