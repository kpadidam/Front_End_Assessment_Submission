import { Injectable, resource } from '@angular/core';
import { Partner } from '../models/partner.model';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  private readonly partnersResource = resource<Partner[], unknown>({
    loader: () => fetch('https://analyze.inflektion.ai/partners.php')
      .then(response => response.json())
  });

  getPartners() {
    return this.partnersResource;
  }
}
