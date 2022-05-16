import { LightningElement, track } from 'lwc';
import getIteratorList from '@salesforce/apex/ForEachIteratorLightning.getIteratorList';
export default class ForEachIterator extends LightningElement {
    @track accountList = [];
    accountListObj = [
        {
            id: '01',
            name: 'John Smith'
        }, {
            id: '02',
            name: 'Rick Sean'
        }, {
            id: '03',
            name: 'Jim Yang'
        }, {
            id: '04',
            name: 'Richard livingston'
        }, {
            id: '06',
            name: 'Ammy Gilbert'
        }, {
            id: '07',
            name: 'Yograj Singh'
        }, {
            id: '08',
            name: 'Victoria Palmer'
        }, {
            id: '09',
            name: 'Joskhe Higashkhita'
            }
    ]
}   