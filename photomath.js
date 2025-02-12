
var body = JSON.parse($response.body);
body.content.tier.level = "genius";
body.content.subscription = {
      "packageName": "com.microblink.PhotoMath",
      "productId": "com.microblink.PhotoMath.purchase.genius.one_year",
      "orderId": "161207301107309",
      "expiry": "3009-09-30T16:12:07Z"",
      "started": "2023-09-30T16:12:07Z"",
      "autoRenewing": true,
      "status": "active",
      "inGracePeriod": false,
      "isTrial": false
    };
$done({ body: JSON.stringify(body) });
