// ag-grid-enterprise v8.2.0
import { ColDef } from "ag-grid/main";
export declare class SetFilterModel {
    private colDef;
    private filterParams;
    private rowModel;
    private valueGetter;
    private allUniqueValues;
    private availableUniqueValues;
    private displayedValues;
    private miniFilter;
    private selectedValuesCount;
    private selectedValuesMap;
    private suppressSorting;
    private showingAvailableOnly;
    private usingProvidedSet;
    private doesRowPassOtherFilters;
    constructor(colDef: ColDef, rowModel: any, valueGetter: any, doesRowPassOtherFilters: any, suppressSorting: boolean);
    refreshAfterNewRowsLoaded(keepSelection: any, isSelectAll: boolean): void;
    refreshAfterAnyFilterChanged(): void;
    private createAllUniqueValues();
    private createAvailableUniqueValues();
    private sortValues(values);
    private getUniqueValues(filterOutNotAvailable);
    setMiniFilter(newMiniFilter: any): boolean;
    getMiniFilter(): any;
    private processMiniFilter();
    getDisplayedValueCount(): number;
    getDisplayedValue(index: any): any;
    selectEverything(): void;
    private selectOn(toSelectOn);
    private valueToKey(key);
    private keyToValue(value);
    isFilterActive(): boolean;
    selectNothing(): void;
    getUniqueValueCount(): number;
    getUniqueValue(index: any): any;
    unselectValue(value: any): void;
    selectValue(value: any): void;
    isValueSelected(value: any): boolean;
    isEverythingSelected(): boolean;
    isNothingSelected(): boolean;
    getModel(): string[];
    setModel(model: string[], isSelectAll?: boolean): void;
}
