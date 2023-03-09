export type WorkoutItem = {
  exerciseTypeId?: number;
  exerciseTypeName?: string;
  exerciseTypeStatus?: number;
  haveData?: boolean;
  exercises?: Array<Exercise>;
};

export type Exercise = {
  exerciseId?: number;
  exerciseName?: string;
  exerciseStatus?: number;
  haveData?: boolean;
  exerciseSets?: Array<ExerciseItem>;
};

export type ExerciseItem = {
  id?: string;
  setId?: number;
  userId?: string;
  load?: number;
  rep?: number;
  pre?: number;
  restId?: number;
  tempoId?: number;
  typeId?: number;
  exerciseId?: number;
  activityLoggerId?: string;
  uploadedDate?: Date;
  status?: number;
};

export type Workout = {
  userId?: string;
  workouId?: string;
  measuredDate?: Date;
  uploadedDate?: Date;
  workout?: WorkoutItem[];
  restsList?: Array<RestItem>;
  temposList?: Array<TempoItem>;

};


export type RestItem = {
  restId?: number;
  rest?: number;
  ordering?: number;
};

export type TempoItem = {
  tempoId?: number;
  tempo?: number;
  ordering?: number;
};
