public inherited sharing class ForEachIteratorLightning {

    @AuraEnabled
    public Static List<Account> getIteratorList(){
        List<Account> accList =  [SELECT Id, Name FROM Account WHERE NOT Name LIKE '%test%' LIMIT 9];
        System.debug('accList::>>'+accList);
        return accList;
    }
}
