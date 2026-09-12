import { campaignsMn } from './campaigns'
import { organizationsMn } from './organizations'
import { companiesMn } from './companies'
import { claimsMn } from './claims'
import { sourcesMn } from './sources'

export const supportingMn = {
  ui: {
    campaign: 'Аян', organization: 'Байгууллага', company: 'Компани', route: 'ЧИГЛЭЛ', historicalContext: 'Түүхэн нөхцөл', relatedEvents: 'Холбогдох үйл явдлууд', relatedPeople: 'Холбогдох хүмүүс',
  },
  campaigns: {
    records: campaignsMn,
    routeConfidence: { HIGH: 'ӨНДӨР ИТГЭЛТЭЙ', APPROXIMATE: 'ОЙРОЛЦОО', SCHEMATIC: 'БҮДҮҮВЧ' },
    treatments: { ESTABLISHED: 'ТОГТООГДСОН', INTERPRETED: 'ТАЙЛБАРЛАСАН', 'ESTABLISHED / DEBATED CAUSATION': 'ТОГТООГДСОН / ШАЛТГААН МАРГААНТАЙ' },
  },
  organizations: {
    records: organizationsMn,
    types: { POLITICAL_PARTY: 'УЛС ТӨРИЙН НАМ', MILITARY: 'ЦЭРГИЙН БАЙГУУЛЛАГА', SECURITY: 'АЮУЛГҮЙ БАЙДЛЫН БАЙГУУЛЛАГА', INTERNATIONAL_ORGANIZATION: 'ОЛОН УЛСЫН БАЙГУУЛЛАГА', POLITICAL_MOVEMENT: 'УЛС ТӨРИЙН ХӨДӨЛГӨӨН', LEGISLATURE: 'ХУУЛЬ ТОГТООХ БАЙГУУЛЛАГА', CONSTITUTIONAL_INSTITUTION: 'ҮНДСЭН ХУУЛИЙН БАЙГУУЛЛАГА', INTERNATIONAL_FINANCIAL_INSTITUTION: 'ОЛОН УЛСЫН САНХҮҮГИЙН БАЙГУУЛЛАГА', ECONOMIC_INSTITUTION: 'ЭДИЙН ЗАСГИЙН БАЙГУУЛЛАГА' },
  },
  companies: {
    records: companiesMn,
    types: { PRIVATE_COMPANY: 'ХУВИЙН КОМПАНИ', STATE_OWNED_ENTERPRISE: 'ТӨРИЙН ӨМЧИТ КОМПАНИ', JOINT_VENTURE: 'ХАМТАРСАН ҮЙЛДВЭР', PROJECT_COMPANY: 'ТӨСЛИЙН КОМПАНИ', PUBLIC_COMPANY: 'НИЙТЭД НЭЭЛТТЭЙ КОМПАНИ' },
  },
  claims: {
    records: claimsMn,
    roles: {
      REPORTS: 'МЭДЭЭЛНЭ', INTERPRETS: 'ТАЙЛБАРЛАНА', SUPPORTS: 'ДЭМЖИНЭ', CLASSIFIES: 'АНГИЛНА',
      'ESTABLISHES LEGAL FRAMEWORK': 'ЭРХ ЗҮЙН ХҮРЭЭГ ТОГТООНО',
      'CONTEMPORARY INSTITUTIONAL ANALYSIS': 'ТУХАЙН ҮЕИЙН БАЙГУУЛЛАГЫН ШИНЖИЛГЭЭ',
      'DOCUMENTS PROGRAM': 'ХӨТӨЛБӨРИЙГ БАРИМТЖУУЛНА',
      'INTERPRETS CONSEQUENCES': 'ҮР ДАГАВРЫГ ТАЙЛБАРЛАНА',
      DOCUMENTS: 'БАРИМТЖУУЛНА',
      'OFFICIAL POSITION': 'АЛБАН ЁСНЫ БАЙР СУУРЬ',
      'OFFICIAL RETROSPECTIVE': 'АЛБАН ЁСНЫ ХОЖУУ ТОЙМ',
      'INTERPRETS CHRONOLOGY': 'ОН ДАРААЛЛЫГ ТАЙЛБАРЛАНА',
      'TIME-BOUNDED ANALYSIS': 'ОГНООТОЙ ШИНЖИЛГЭЭ',
      'INTERESTED PRIMARY SOURCE': 'АШИГ СОНИРХОЛТОЙ АНХДАГЧ ЭХ СУРВАЛЖ',
      'DOCUMENTS OWNERSHIP AND DISCLOSURE': 'ӨМЧЛӨЛ, ИЛ ТОД БАЙДЛЫГ БАРИМТЖУУЛНА',
      'INTERPRETS LOCAL EFFECTS': 'ОРОН НУТГИЙН НӨЛӨӨГ ТАЙЛБАРЛАНА',
      'ANALYZES RISKS': 'ЭРСДЭЛИЙГ ШИНЖИЛНЭ',
      'INTERPRETS GOVERNANCE AND COMMUNITY RELATIONS': 'ЗАСАГЛАЛ, НИЙГЭМЛЭГИЙН ХАРИЛЦААГ ТАЙЛБАРЛАНА',
      'OFFICIAL POLICY': 'АЛБАН ЁСНЫ БОДЛОГО',
      'DATED EXTRACTIVE DISCLOSURE': 'ОГНООТОЙ ОЛБОРЛОЛТЫН ИЛ ТОД БАЙДАЛ',
      'OBSERVER ASSESSMENT': 'АЖИГЛАГЧИЙН ҮНЭЛГЭЭ',
      'ESTABLISHES EMERGENCY DECLARATION': 'ОНЦ БАЙДЛЫН ТУНХАГИЙГ ТОГТООНО',
      'DOMESTIC HUMAN-RIGHTS REVIEW': 'ДОТООД ХҮНИЙ ЭРХИЙН ХЯНАЛТ',
      'HUMAN RIGHTS INVESTIGATION': 'ХҮНИЙ ЭРХИЙН ШИНЖИЛГЭЭ',
      'HUMAN RIGHTS FINDINGS': 'ХҮНИЙ ЭРХИЙН ДҮГНЭЛТ',
      'CONTEMPORARY RECONSTRUCTION': 'ТУХАЙН ҮЕИЙН СЭРГЭЭН ТАЙЛБАР',
      'DOCUMENTS DOMESTIC ACCOUNTABILITY CONCERNS': 'ДОТООД ХАРИУЦЛАГЫН АСУУДЛЫГ БАРИМТЖУУЛНА',
      'OBSERVES CURRENT INSTITUTIONAL STRENGTHS AND LIMITS': 'ОДООГИЙН БАЙГУУЛЛАГЫН ДАВУУ БА ХЯЗГААРЫГ АЖИГЛАНА',
      ANALYZES: 'ШИНЖИЛНЭ', SYNTHESIZES: 'НЭГТГЭН ТАЙЛБАРЛАНА',
      'INTERPRETS RESIDENT AGENCY': 'ОРШИН СУУГЧДЫН ИДЭВХИЙГ ТАЙЛБАРЛАНА',
      'ANALYZES ONE CONTRIBUTING PRESSURE': 'НЭГ НӨЛӨӨЛӨХ ДАРАМТЫГ ШИНЖИЛНЭ',
      'DOCUMENTS GENDERED HOUSEHOLD LABOR': 'ХҮЙСИЙН ӨРХИЙН ХӨДӨЛМӨРИЙГ БАРИМТЖУУЛНА',
      'INTERPRETS EMPLOYMENT AND CARE CONSTRAINTS': 'АЖИЛ ЭРХЛЭЛТ, АСРАМЖИЙН ХЯЗГААРЫГ ТАЙЛБАРЛАНА',
      'TIME-BOUNDED STUDY': 'ОГНООТОЙ СУДАЛГАА',
      'ANALYZES INTERACTING VULNERABILITIES': 'ХАРИЛЦАН НӨЛӨӨЛӨХ ЭМЗЭГ БАЙДЛЫГ ШИНЖИЛНЭ',
      'STUDIES LOCAL MINING EFFECTS': 'ОРОН НУТГИЙН УУЛ УУРХАЙН НӨЛӨӨГ СУДАЛНА',
      CONTEXTUALIZES: 'НӨХЦӨЛД БАЙРЛУУЛНА',
      'INTERPRETS RELIGIOUS CHANGE': 'ШАШНЫ ӨӨРЧЛӨЛТИЙГ ТАЙЛБАРЛАНА',
      'MONGOLIAN SOCIAL RESEARCH': 'МОНГОЛЫН НИЙГМИЙН СУДАЛГАА',
      'DOCUMENTS SCRIPT POLICY': 'БИЧГИЙН БОДЛОГЫГ БАРИМТЖУУЛНА',
      'INTERPRETS CULTURAL CONCEPTS': 'СОЁЛЫН ОЙЛГОЛТЫГ ТАЙЛБАРЛАНА',
      'STUDIES MUSIC AND YOUTH IDENTITY': 'ХӨГЖИМ, ЗАЛУУЧУУДЫН НЭРШЛИЙГ СУДАЛНА',
      'SYNTHESIZES CULTURAL FIELDS AND MEMORY': 'СОЁЛЫН САЛБАР, ОЙ САНАМЖИЙГ НЭГТГЭНЭ',
      'PROVIDES DATED DIGITAL-USE EVIDENCE': 'ОГНООТОЙ ДИЖИТАЛ ХЭРЭГЛЭЭНИЙ БАРИМТ ӨГНӨ',
      'DOCUMENTS DIGITAL PUBLIC SERVICES': 'ДИЖИТАЛ ТӨРИЙН ҮЙЛЧИЛГЭЭГ БАРИМТЖУУЛНА',
    },
  },
  sources: { records: sourcesMn },
}
