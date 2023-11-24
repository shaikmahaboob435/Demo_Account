import { LightningElement,wire } from 'lwc';
import getAccountList from "@salesforce/apex/RecentlyAdd.getAccounts";
const table_columns= [
    {label: 'Name', fieldName: 'Name', type: 'text'},
    {label: 'Phone', fieldName: 'Phone', type: 'text'},
    {label: 'AnnualRevenue', fieldName: 'AnnualRevenue', type: 'text'},
    {label: 'AccountNumber', fieldName: 'AccountNumber', type: 'text'},
    {label: 'BillingAddress', fieldName: 'BillingAddress', type: 'text'},
    {label: 'Type', fieldName: 'Type', type: 'text'},
    {label: 'Website', fieldName: 'Website', type: 'text'},
    {label: 'CreatedDate', fieldName: 'CreatedDate', type: 'text'},

];
export default class ViewRecentlyAddAccount extends LightningElement {
    columns = table_columns;
    @wire(getAccountList) accounts;
}