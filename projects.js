import mongoose from "mongoose"

const Schema = mongoose.Schema

// =============== projects ===================

const projectSchema = new Schema({
  id:  { type: Schema.Types.ObjectId, required: true},
  title: { type: String, required: true, unique: true },
  languages: [{ type: Schema.Types.ObjectId, ref: 'languages' }],
  data: {
    dataKey: [{ type: Schema.Types.ObjectId, ref: 'dataKeys' }],
    dataValue: [{ type: Schema.Types.ObjectId, ref: 'dataValues' }]
  }
})

const projectModel = mongoose.model('projects', projectSchema)

/*
  1 project : has many -> languages
            : has many -> dataKeys
            : has many -> dataValues
*/

// =============== languages ===================

const languagesSchema = new Schema({
  language_id: { type: Schema.Types.ObjectId, required: true},
  code: { type: String, required: true },
  name: { type: String, required: true }
})

const languagesModel = mongoose.model('languages', languagesSchema)

// =============== dataKeys ===================

const dataKeySchema = new Schema({
  dataKey_id:  { type: Schema.Types.ObjectId, required: true},
  title: { type: String, required: true }
})

const dataKeysModel = mongoose.model('dataKeys', dataKeySchema)


// =============== dataValues ===================

const dataValueSchema = new Schema({
  dataValue_id: { type: Schema.Types.ObjectId, required: true},
  value: { type: String, required: true},
  dataKey_id: { type: Schema.Types.ObjectId, required: true, ref: 'dataKeys' },
  project_id: { type: Schema.Types.ObjectId, required: true, ref: 'projects' },
  language_id: { type: Schema.Types.ObjectId, required: true, ref: 'languages' }
})

const dataValuesModel = mongoose.model('dataValues', dataValueSchema)

/*
  1 dataValue : has 1 -> dataKeys
              : has 1 -> projects
              : has 1 -> languages

*/
