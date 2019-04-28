import { deserializeXMLSchema } from 'texture-xml-utils'
import JATSArchivingData from '../tmp/JATS-archiving-1.2.data.js'

let JATSArchiving12 = deserializeXMLSchema(JATSArchivingData,
  '-//NLM//DTD JATS (Z39.96) Journal Archiving and Interchange DTD with MathML3 v1.2 20190208//EN',
  'JATS-archivearticle1-mathml3.dtd'
)

JATSArchiving12.aliases = [
  '-//NLM//DTD JATS (Z39.96) Journal Archiving and Interchange DTD v1.2 20190208//EN'
]

export default JATSArchiving12
