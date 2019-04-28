import { deserializeXMLSchema } from 'texture-xml-utils'
import JATSArchiving10Data from '../tmp/JATS-archiving-1.0.data.js'

let JATSArchiving10 = deserializeXMLSchema(JATSArchiving10Data,
  '-//NLM//DTD JATS (Z39.96) Journal Archiving and Interchange DTD v1.0 20120330//EN',
  'JATS-archivearticle1.dtd'
)

export default JATSArchiving10
