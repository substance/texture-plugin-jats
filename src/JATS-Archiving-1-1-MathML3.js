import { deserializeXMLSchema } from 'texture-xml-utils'
import JATSArchivingData from '../tmp/JATS-archiving-1.1.data.js'

let JATSArchiving = deserializeXMLSchema(JATSArchivingData,
  '-//NLM//DTD JATS (Z39.96) Journal Archiving and Interchange DTD with MathML3 v1.1 20151215//EN',
  'JATS-archivearticle1-mathml3.dtd'
)

export default JATSArchiving
