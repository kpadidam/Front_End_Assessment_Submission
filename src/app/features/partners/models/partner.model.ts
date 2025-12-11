export interface Partner {
  id: string;
  partnerName: string;
  partnerType: 'Influencer' | 'Affiliate';
  conversions: number;
  commissions: number;
  grosssales: number;
  contract: string;
}
