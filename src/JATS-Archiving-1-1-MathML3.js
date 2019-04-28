import { deserializeXMLSchema } from 'texture-xml-utils'
import JATSArchiving11Data from '../tmp/JATS-archiving-1.1.data.js'

let JATSArchiving11 = deserializeXMLSchema(JATSArchiving11Data,
  '-//NLM//DTD JATS (Z39.96) Journal Archiving and Interchange DTD v1.1 20151215//EN',
  'JATS-archivearticle1-mathml3.dtd'
)

JATSArchiving11.aliases = [
  '-//NLM//DTD JATS (Z39.96) Journal Archiving and Interchange DTD with MathML3 v1.1 20151215//EN'
]

export default JATSArchiving11
