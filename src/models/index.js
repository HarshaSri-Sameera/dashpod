// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Profile, RegisterRecord, DashPod, AnalyticsValues } = initSchema(schema);

export {
  Profile,
  RegisterRecord,
  DashPod,
  AnalyticsValues
};