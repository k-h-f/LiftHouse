enum ExerciseType {
  PULL = 'PULL',
  PUSH = 'PUSH',
  LEGS = 'LEGS',
}

export interface ExerciseIdWithOrder {
  id: number;
  order: number;
}

export interface InsertIntoRoutines {
  routineName: string;
  exercisesIdsWithOrder: ExerciseIdWithOrder[];
}

export interface QueryArgs {
  args: InsertIntoRoutines;
}

export default ExerciseType;
