import { LightningElement,track } from 'lwc';
import getAccountList from '@salesforce/apex/FetchAccountdetailsforLWC.getAccountDetails';
export default class LwcToApexModeThree extends LightningElement {

    @track accounts;
    @track error;

    handleLoad() {
        getAccountList()
         .then(result => { 
             this.accounts=result;
         })
         .catch(error => {
             this.error=error;
         });
    }
}