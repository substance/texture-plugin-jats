import { deserializeXMLSchema } from 'texture-xml-utils'
import JATSArchiving12Data from '../tmp/JATS-archiving-1.2.data.js'

let JATSArchiving12 = deserializeXMLSchema(JATSArchiving12Data,
  '-//NLM//DTD JATS (Z39.96) Journal Archiving and Interchange DTD v1.2 20190208//EN',
  'JATS-archivearticle1-mathml3.dtd'
)

JATSArchiving12.aliases = [
  '-//NLM//DTD JATS (Z39.96) Journal Archiving and Interchange DTD with MathML3 v1.2 20190208//EN'
]

export default JATSArchiving12
