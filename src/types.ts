export interface CommodityOption {
  id: string;
  name: string;
  unit: string;
  defaultQty: number;
  minPrice: number;
  maxPrice: number;
  defaultTarget: number;
  defaultWalkaway: number;
  suppliers: {
    name: string;
    location: string;
    basePrice: number;
    leadTime: number;
    paymentTerms: string;
    scriptNegotiated: string;
  }[];
}

export interface CallStreamState {
  id: string;
  supplierName: string;
  timer: string;
  status: 'Dialing...' | 'Connected' | 'Negotiating' | 'Closed' | 'Walked Away';
  offerPrice: number;
  leadTimeDays: number;
  paymentTerms: string;
  score: number;
  transcript: string;
  isBestOffer?: boolean;
  sentiment: 'Flexible' | 'Neutral' | 'Rigid';
}

export interface RoiState {
  spendMillion: number;
  callsMonth: number;
  savings: number;
  hours: number;
  roiMultiple: number;
}
