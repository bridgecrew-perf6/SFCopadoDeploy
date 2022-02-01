import { LightningElement , wire ,track} from 'lwc';

import getAccountList from '@salesforce/apex/FetchAccountdetailsforLWC.getAccountDetails';
export default class LwcToApexmodeTwo extends LightningElement {

@track accounts;

@track error;

@wire(getAccountList)
 wiredAccounts({data,error}) {
     if(data) {
         this.accounts= data;
     }
     else if(error) {
         this.error = error;
     }
 }
}