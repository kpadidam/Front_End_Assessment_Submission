import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerService } from '../../services/partner.service';

@Component({
  selector: 'app-partner-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partner-list.component.html',
  styleUrl: './partner-list.component.css'
})
export class PartnerListComponent {
  private readonly partnerService = new PartnerService();

  partnersResource = this.partnerService.getPartners();
  currentPage = signal(1);
  itemsPerPage = 15;

  paginatedPartners = computed(() => {
    const partners = this.partnersResource.value() || [];
    const page = this.currentPage();
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return partners.slice(startIndex, endIndex);
  });

  totalPages = computed(() => {
    const partners = this.partnersResource.value() || [];
    return Math.ceil(partners.length / this.itemsPerPage);
  });

  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update(page => page + 1);
    }
  }

  previousPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update(page => page - 1);
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }
}
