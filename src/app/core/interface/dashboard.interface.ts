//#region Machine Summary
export interface MachineSummary {
  machineName: string;
  scrapHistory: any;
  oeeHistory: any;
  currentOrder: WorkOrderInformation;
  materialInfo: LogonMaterialInformation[];
  toolInfo: LogonToolInformation[];
}

//#endregion

//#region Work Order Info
export interface WorkOrderInformation {
  orderName: string;
  operationName: string;
  partName: string;
  targetQty: number;
  yieldQty: number;
  scrapQty: number;
  targetCycleTime: number;
  actualCycleTime: number;
  secondsToBeFinished: number;
}
//#endregion

//#region Logged On Material Info
export interface LogonMaterialInformation {
  batchName: string;
  remainQty: number;
  orderName: string;
  operationName: string;
  machineName: string;
  position: number;
  consumeRate: number;
  secondsToConsumed: number;
}
//#endregion

//#region Logged On Tool Info
export interface LogonToolInformation {
  toolName: string;
  toolGroupName: string;
  orderName: string;
  operationName: string;
  machineName: string;
  strokes: number;
  strokesLeftBeforeMaintennance: number;
}
//#endregion

//#region Scrap History

//#endregion
