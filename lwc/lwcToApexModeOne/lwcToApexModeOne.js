import { LightningElement ,wire } from 'lwc';

import getAccountList from '@salesforce/apex/FetchAccountdetailsforLWC.getAccountDetails';
export default class LwcToApexModeOne extends LightningElement {

    @wire(getAccountList) accounts;

        
}