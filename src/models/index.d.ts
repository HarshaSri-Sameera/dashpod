import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerAnalyticsValues = {
  readonly podName?: string | null;
  readonly podColor?: string | null;
  readonly podAddress?: string | null;
  readonly isHit?: string | null;
  readonly entryX?: number | null;
  readonly entryY?: number | null;
}

type LazyAnalyticsValues = {
  readonly podName?: string | null;
  readonly podColor?: string | null;
  readonly podAddress?: string | null;
  readonly isHit?: string | null;
  readonly entryX?: number | null;
  readonly entryY?: number | null;
}

export declare type AnalyticsValues = LazyLoading extends LazyLoadingDisabled ? EagerAnalyticsValues : LazyAnalyticsValues

export declare const AnalyticsValues: (new (init: ModelInit<AnalyticsValues>) => AnalyticsValues)

type EagerProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly playerId: string;
  readonly accountId: string;
  readonly profileId?: number | null;
  readonly academyName?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly mobileNumber?: string | null;
  readonly emailId?: string | null;
  readonly dob?: string | null;
  readonly height?: string | null;
  readonly weight?: string | null;
  readonly gender?: string | null;
  readonly updateMeasurements?: string | null;
  readonly updateInterval?: string | null;
  readonly buildingName?: string | null;
  readonly street?: string | null;
  readonly locality?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly pinCode?: string | null;
  readonly location?: string | null;
  readonly areasOfIntrest?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly playerId: string;
  readonly accountId: string;
  readonly profileId?: number | null;
  readonly academyName?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly mobileNumber?: string | null;
  readonly emailId?: string | null;
  readonly dob?: string | null;
  readonly height?: string | null;
  readonly weight?: string | null;
  readonly gender?: string | null;
  readonly updateMeasurements?: string | null;
  readonly updateInterval?: string | null;
  readonly buildingName?: string | null;
  readonly street?: string | null;
  readonly locality?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly pinCode?: string | null;
  readonly location?: string | null;
  readonly areasOfIntrest?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Profile = LazyLoading extends LazyLoadingDisabled ? EagerProfile : LazyProfile

export declare const Profile: (new (init: ModelInit<Profile>) => Profile) & {
  copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}

type EagerRegisterRecord = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RegisterRecord, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly recordId: string;
  readonly accountId: string;
  readonly playerId: string;
  readonly playerName?: string | null;
  readonly activityId?: string | null;
  readonly activityName?: string | null;
  readonly base?: string | null;
  readonly color?: number | null;
  readonly colorCode?: number | null;
  readonly startTime?: string | null;
  readonly prevMacId?: string | null;
  readonly currentMacId?: string | null;
  readonly hitCount?: number | null;
  readonly missCount?: number | null;
  readonly avgTime?: string | null;
  readonly playerAge?: string | null;
  readonly gender?: string | null;
  readonly height?: string | null;
  readonly weight?: string | null;
  readonly lastName?: string | null;
  readonly dateAndTime?: string | null;
  readonly podsCount?: string | null;
  readonly activityDuration?: string | null;
  readonly podName?: string | null;
  readonly categoryName?: string | null;
  readonly categoryId?: string | null;
  readonly analyticsValuesList?: (AnalyticsValues | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRegisterRecord = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RegisterRecord, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly recordId: string;
  readonly accountId: string;
  readonly playerId: string;
  readonly playerName?: string | null;
  readonly activityId?: string | null;
  readonly activityName?: string | null;
  readonly base?: string | null;
  readonly color?: number | null;
  readonly colorCode?: number | null;
  readonly startTime?: string | null;
  readonly prevMacId?: string | null;
  readonly currentMacId?: string | null;
  readonly hitCount?: number | null;
  readonly missCount?: number | null;
  readonly avgTime?: string | null;
  readonly playerAge?: string | null;
  readonly gender?: string | null;
  readonly height?: string | null;
  readonly weight?: string | null;
  readonly lastName?: string | null;
  readonly dateAndTime?: string | null;
  readonly podsCount?: string | null;
  readonly activityDuration?: string | null;
  readonly podName?: string | null;
  readonly categoryName?: string | null;
  readonly categoryId?: string | null;
  readonly analyticsValuesList?: (AnalyticsValues | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RegisterRecord = LazyLoading extends LazyLoadingDisabled ? EagerRegisterRecord : LazyRegisterRecord

export declare const RegisterRecord: (new (init: ModelInit<RegisterRecord>) => RegisterRecord) & {
  copyOf(source: RegisterRecord, mutator: (draft: MutableModel<RegisterRecord>) => MutableModel<RegisterRecord> | void): RegisterRecord;
}

type EagerDashPod = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DashPod, 'id'>;
  };
  readonly id: string;
  readonly podMacId: string;
  readonly accountId: string;
  readonly podName?: string | null;
  readonly podType?: string | null;
  readonly start_date?: string | null;
  readonly update_date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDashPod = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DashPod, 'id'>;
  };
  readonly id: string;
  readonly podMacId: string;
  readonly accountId: string;
  readonly podName?: string | null;
  readonly podType?: string | null;
  readonly start_date?: string | null;
  readonly update_date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DashPod = LazyLoading extends LazyLoadingDisabled ? EagerDashPod : LazyDashPod

export declare const DashPod: (new (init: ModelInit<DashPod>) => DashPod) & {
  copyOf(source: DashPod, mutator: (draft: MutableModel<DashPod>) => MutableModel<DashPod> | void): DashPod;
}