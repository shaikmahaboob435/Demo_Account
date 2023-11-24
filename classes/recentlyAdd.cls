public class recentlyAdd {
    
    /**
        * @description:- getAccounts retrieves the last 10 Account records created
        * @return List<Account>
        */
       @AuraEnabled(cacheable=true)
       public static List<Account> getAccounts() {
           return [
               SELECT
                   Id,
                   Name,
                   Phone,
                   Website,
                   AnnualRevenue,
                   Industry,
                   CreatedDate
               FROM Account
               ORDER BY CreatedDate DESC
               LIMIT 10
           ];
       }
   }