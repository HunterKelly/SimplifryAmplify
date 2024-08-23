import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly emailaddress: string;
  readonly password: string;
  readonly role: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly emailaddress: string;
  readonly password: string;
  readonly role: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}

type EagerReports = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reports, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly report: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReports = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reports, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly report: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Reports = LazyLoading extends LazyLoadingDisabled ? EagerReports : LazyReports

export declare const Reports: (new (init: ModelInit<Reports>) => Reports) & {
  copyOf(source: Reports, mutator: (draft: MutableModel<Reports>) => MutableModel<Reports> | void): Reports;
}