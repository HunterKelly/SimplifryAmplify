// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Users, Reports } = initSchema(schema);

export {
  Users,
  Reports
};