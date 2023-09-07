public with sharing class contactAuraServices {
    public contactAuraServices() {
    }
    @AuraEnabled(cacheable=true)
     public static List<sObject> getContactList(String name){
        String key = name;
        String query = 'select id, name, email, phone from contact';
        return database.query(query);
        
     }      
     @AuraEnabled(cacheable=true)
     public static List<SObject> getAccountList(String name){
        String key =  name;
        String query = 'select id, name, industry from account';
        return database.query(query);
     }
    }
