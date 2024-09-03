import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], term:any): any {
        console.log('term', term);
      
        return term 
            ? items.filter(item => item.PatientTreatmentID == term)
            : items;
    }
}

@Pipe({
    name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
    transform(items: any[], sortedBy: number): any {
        console.log('sortedBy', sortedBy);
        
        return items.sort((a, b) => {return a[sortedBy] - b[sortedBy]});
    }
}