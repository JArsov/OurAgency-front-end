import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminAuthGuard } from './admin-auth.guard';

describe('AdminAuthGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule ],
            providers: [AdminAuthGuard]
        });
    });

    it('should ...', inject([AdminAuthGuard], (guard: AdminAuthGuard) => {
        expect(guard).toBeTruthy();
    }));
});
