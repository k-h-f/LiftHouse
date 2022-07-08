export enum TableName {
  routines = 'routines',
  exercises = 'exercises',
  routineToExercises = 'routineToExercises',
  entries = 'entries',
}

export enum ExerciseType {
  UPPER_INTENSITY = 'UPPER_INTENSITY',
  UPPER_VOLUME = 'UPPER_VOLUME',
  LOWER_INTENSITY = 'LOWER_INTENSITY',
  LOWER_VOLUME = 'LOWER_VOLUME',
}

export interface Exercise {
  type: ExerciseType;
  name: string;
}
