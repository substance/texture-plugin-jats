import { XMLSchema } from 'texture-xml-utils'
import JATSArchivingData from '../tmp/JATS-archiving-1.0.data.js'

let JATSArchiving = XMLSchema.fromJSON(JATSArchivingData,
  'article',
  '-//NLM//DTD JATS (Z39.96) Journal Archiving and Interchange DTD v1.0 20120330//EN',
  'JATS-archivearticle1.dtd'
)

export default JATSArchiving
