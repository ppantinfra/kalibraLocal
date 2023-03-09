export interface IBloodworkFileUpload {
  userId?: string;
  filename?: string;
  document?: string;
  filetype?: string;
}

export type HealthMarkerUnit = {
  unitId: number;
  unit: string;
  conversionFactor: number;
  rangeMax?: any;
  rangeMin?: any;
};

export type BiomarkerItem = {
  bloodworkDataId?: string;
  unitId?: number;
  unit?: string;
  lineNumber?: number;
  healthmarker?: string;
  healthMarkerId?: number;
  value?: string;
  status?: number;
  pageNumber?: number;
  unit_types?: Array<HealthMarkerUnit>;
  healthMarkerMinRange?: number;
  healthMarkerMaxRange?: number;
  maxValue?:  number;
  minValue?:  number;
  info?: string;
};

export type Bloodwork = {
  userId: string;
  documentId: string;
  filename: string;
  measuredDate: Date;
  uploadedDate: Date;
  healthMarker: BiomarkerItem[];
  referralAuthority: string;
};

export type HealthMarker = {
  healthMarkerId: number;
  healthMarkerName: string;
  healthMarkerUnitId: number;
  healthMarkerUnit: string;
  healthMarkerMinRange: number;
  healthMarkerMaxRange: number;
  healthMarkerUnitTypes: Array<HealthMarkerUnit>;
};
