export interface scoreDataOrigin{
  [key:string]:any,
  difficulty:string,
  version?:string,
  title:string,
  previousBPI?:number,
  difficultyLevel:string,
  exScore:number,
  previousExScore?:number,
  missCount?:number|undefined,
  clearState:number,
  storedAt:string,
  updatedAt:string,
  isSingle:number,
  isImported?:boolean,
  _isAvailable?:boolean,
  willModified?:boolean,
}

export interface scoreData extends scoreDataOrigin{
  currentBPI:number,
  lastScore:number,
}

export interface songData{
  [key:string]:any,
  title:string,
  difficulty:string,
  wr:number,
  avg:number,
  notes:number,
  bpm:string,
  textage:string,
  difficultyLevel:string,
  dpLevel:string,
  isFavorited:boolean,
  isCreated:boolean,
  updatedAt:string,
  coef?:number,
}

export interface historyData{
  [key:string]:any,
  title:string,
  difficulty:string,
  difficultyLevel:string,
  storedAt:string,
  exScore:number,
  BPI:number,
  isSingle:number,
  updatedAt:string,
}

export interface rivalStoreData{
  timeStamp: string,
  serverTime:firebase.firestore.FieldValue,
  uid:string,
  displayName:string,
  profile:string,
  photoURL:string,
  arenaRank:string,
  totalBPI?:string
}

export interface DBRivalStoreData{
  rivalName:string,
  uid:string,
  updatedAt:string,
  lastUpdatedAt:string,
  photoURL:string,
  profile:string
}

export interface rivalScoreData extends scoreDataOrigin{
  rivalName:string,
}
