var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.entitlements = {
      "Premium":{
              "expires_date":"2030-11-30T05:05:04Z",
              "product_identifier":"PremiumMonthly",
              "purchase_date":"2007-11-30T05:05:04Z"
      }
  },
  
obj.subscriber.subscriptions ={
      "PremiumMonthly":{
              "billing_issues_detected_at":null,
              "expires_date":"2030-11-30T05:05:04Z",
              "is_sandbox":false,
              "original_purchase_date":"2007-11-30T05:05:04Z",
              "period_type":"normal",
              "purchase_date":"2007-11-30T05:05:04Z",
              "store":"app_store",
              "unsubscribe_detected_at":null
      }
  }

body = JSON.stringify(obj);
$done({body});
